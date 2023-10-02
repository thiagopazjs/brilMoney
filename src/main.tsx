import React from 'react'
import ReactDOM from 'react-dom/client'
import { Model, createServer } from 'miragejs'
import { App } from './App'


createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title:'Freela Acelera',
          type: 'deposit',
          category:'Dev',
          amount:'6000',
          createdAt: new Date('2023-09-13 18:00'),
        },
        {
          id: 2,
          title:'Contas',
          type: 'witdraw',
          category:'casa',
          amount:'1500',
          createdAt: new Date('2023-09-14 09:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
     
    })


    this.post('transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }

  

})









ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
