import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */

app.post('/api/get-product-list', (req, res) => {
  return res.status(200).send({
    meta: {
      message: ' string;',
      status: ' string;',
      code: ' string;',
    },
    data: {
      Filter: {
        CardService: [
          { name: 'Service A', value: 'Value A' },
          { name: 'Service B', value: 'Value B' },
        ],
        Price: {
          en: ['10', '20'],
          id: ['10 Ribu', '20 Ribu'],
        },
        Quota: [
          { name: 'Quota 1', value: '10GB' },
          { name: 'Quota 2', value: '20GB' },
        ],
        RoamingType: null,
        Sort: {
          en: [{ name: 'Price', value: 'low-to-high' }],
          id: [{ name: 'Harga', value: 'rendah-ke-tinggi' }],
        },
        Subcategory: ['Internet', 'Streaming'],
      },
      List: [
        {
          AutoRenewal: 'Yes',
          Bonus: [
            {
              classStyle: 'bold',
              consumptiontime: '24 Hours',
              highlight: 'Unlimited',
              longdesc: 'Bonus data unlimited',
              name: 'Bonus Data',
              quota: '5GB',
              shortdesc: 'Bonus 5GB',
              subclass: 'Data',
              validity: '30 Days',
              viral: 'No',
            },
          ],
          BusinessPID: 'PID123',
          Category: 'Internet',
          Fee: 50000,
          ID: 'PRD001',
          Longdesc: 'Paket internet 50GB selama 30 hari',
          Name: 'Internet 50GB',
          OfferPriority: 'High',
          OriginalPrice: 60000,
          OtherBonus: 'Extra 2GB',
          Price: 50000,
          PurchasePercentage: 80,
          RibbonImage: null,
          RibbonText: null,
          Shortdesc: '50GB kuota utama',
          Subcategory: 'Internet',
          Terms: 'Berlaku untuk semua pelanggan',
          TotalQuota: '50GB',
          TotalValidity: '30 Days',
          TrxPackage: 'TX001',
          UseStock: true,
          Validity: '30 Days',
          region: 'Indonesia',
        },
      ],
      MSISDN: 628123456789,
      TotalPage: 1,
    },
  });
});
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createNodeRequestHandler(app);
