'use strict';

const express = require('express');

const models = require('./models/');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.get('/genres', (req, res) => {
  models.Genre.findAll().then((genres) => {
  res.send(genres);
  });
});

app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll()
    .then(types => res.send(types));
});


app.get('/artist', (req, res) => {
  models.Artist.findAll()
    .then(artists => res.send(artists));
});

app.get('/playlist', (req, res) => {
  models.Playlist.findAll()
    .then(playlist => res.send(playlist));
});

app.get('/albums', (req, res) => {
  //selecting only some attributes
  models.Album.findAll({
    attributes: ['AlbumId', 'Title'],
    include: {
      model: models.Artist,
      attributes: ['Name']
   }
  })
    .then(albums => res.send(albums));
});

app.get('/invoices', (req, res) => {
  models.Invoice.findAll({
      attributes: { exclude: 'CustomerId' },
      include: {
        model: models.Customer,
        attributes: { exclude: [
          'CustomerId',
          'SupportRepId'
        ]}
      }
    })
    .then(invoices => res.send(invoices));
});

app.get('/invoices/:id', (req, res) => {
  models.Invoice.findOne({
      where: {
        InvoiceId: req.params.id
      }
    })
    .then(invoice => res.send(invoice));
});


app.get('/customers', (req, res) => {
  models.Customer.findAll()
    .then(customers => res.send(customers));
});

app.get('/customers/:id', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    }
  }).then(customer => res.send(customer));
});

app.get('/customers/:id/invoices', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    },
    include: models.Invoice
  })
  .then(invoices => res.send(invoices));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
