<template>
  <div id="invoice-show">
    <div class="container">
			<div class="box box-good">
				<div class="box-header">
					<div class="columns is-mobile">
						<div class="column is-6">
							<div class="shadow large">Faturas</div>
						</div>
						<div class="column is-6">
							<p class="has-text-right">Gerado em: 04/04/2019</p>
						</div>
					</div>
				</div>

				<div class="box-content">
					<div class="columns is-mobile">
						<div class="column is-7">
							<address class="content">
					      De
				        <strong>Foo Company</strong><br>
					      Rua Foo, 322.<br>
					      Fortaleza, CE - 60.115-191<br>
					      Telefone: (85) 3231-0926<br>
					      Email: contact@foo.com
					    </address>
						</div>
						<div class="column is-5">
							<div class="content has-text-right">
					      <b>Fatura nº 301</b><br>
					      <br>
					      <b>Identificação do pedido:</b> 10<br>
					      <b>Data de pagamento:</b> 29/05/2019<br>
					      <b>Account:</b> 96-34562-2
					    </div>
						</div>
					</div>
					<div class="columns">
						<div class="column is-12">
							<address class="content">
					      Para
					      <strong>ACME ltda</strong><br>
					      Rua ACME, 1703<br>
					      Fortaleza, CE 60.140-320<br>
					      Telefone: (85) 3401-2201<br>
					      Responsável: Fulano Acme (fulano@acme.br)
					    </address>
						</div>
					</div>
					<div class="columns">
						<div class="column is-12">
							<div class="table">
                <b-table :data="data" :columns="columns"></b-table>
							</div>
						</div>
					</div>
					<div class="columns">
						<div class="column is-7">
              <b-icon
                icon="cash-100"
                size="is-medium">
              </b-icon>
              <b-icon
                icon="credit-card"
                size="is-medium">
              </b-icon>
              <div style="padding-bottom:60px"></div>
							<div class="notification">
							  Lorem ipsum dolor sit amet, consectetur
							  adipiscing elit lorem ipsum dolor sit amet,
							  consectetur adipiscing elit
							</div>
						</div>
						<div class="column is-5">
							<ul class="list-group list-group-unbordered">
				        <li class="list-group-item">
				          <b>Subtotal:</b> <p class="is-pulled-right">R$ 555,00</p>
				        </li>
				        <li class="list-group-item">
				          <b>ISS (5%):</b> <p class="is-pulled-right">R$ 27,75</p>
				        </li>
				        <li class="list-group-item">
				          <b>Taxa de entrega:</b> <p class="is-pulled-right">R$ 0,00</p>
				        </li>
				        <li class="list-group-item">
				          <b>Total:</b> <p class="is-pulled-right"><b>R$ 582,75</b></p>
				        </li>
			        </ul>
						</div>
					</div>
				</div>
				<div class="box-footer has-text-right">
					<a class="button">Negar</a>
					<a class="button is-dark">
					  <span>Aceitar</span>
					</a>
				</div>
			</div>
		</div>

  </div>
</template>

<script>
export default {
  name: 'InvoiceShow',
  data () {
    return {
      data: [
        { 'item': 1, 'identification': '001', 'description': 'Consectetur adipiscing elit', 'quantity': '10', 'unit_value': '31,00', 'value': '310,00' },
        { 'item': 2, 'identification': '024', 'description': 'Lorem ipsum dolor sit adipiscing elit', 'quantity': '12', 'unit_value': '20,40', 'value': '244,80' }
      ],
      columns: [
        { field: 'item', label: 'Item', numeric: true},
        { field: 'identification', label: 'Identificação', numeric: true },
        { field: 'description', label: 'Descrição', numeric: false },
        { field: 'quantity', label: 'Quantidade', numeric: true},
        { field: 'unit_value', label: 'Valor Unitário', numeric: false },
        { field: 'value', label: 'Valor', numeric: false }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
