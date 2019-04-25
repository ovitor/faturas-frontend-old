<template>
  <div id="invoice-show">
    <div class="container">
			<div class="box box-good is-shadowless" ref="pdf">
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
                <b-table :data="data" :columns="columns" ref="table"></b-table>
							</div>
						</div>
					</div>
					<div class="columns">
						<div class="column is-8">
              <b-notification type="is-info" :closable="false" has-icon>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
              </b-notification>
						</div>
						<div class="column is-4" ref="results">
							<ul class="list-group">
				        <li class="list-group-item">
				          <b>Subtotal:</b> <p class="is-pulled-right">R$ 554,80</p>
				        </li>
				        <li class="list-group-item">
				          <b>ISS (5%):</b> <p class="is-pulled-right">R$ 27,74</p>
				        </li>
				        <li class="list-group-item">
				          <b>Taxa de entrega:</b> <p class="is-pulled-right">R$ 0,00</p>
				        </li>
				        <li class="list-group-item">
				          <b>Total:</b> <p class="is-pulled-right"><b>R$ 582,54</b></p>
				        </li>
			        </ul>
            </div> <!-- is-3 -->
          </div> <!-- columns -->
				</div>
        <div style="padding-bottom:40px;"></div>

      </div> <!-- container -->
      <div id="footer" class="box is-shadowless">
        <div class="box-footer has-text-right">
          <b-button type="is-danger">Negar</b-button>
          <b-button type="is-primary" @click="pdfPrint">Imprimir</b-button>
          <b-button type="is-success">Enviar por e-mail</b-button>
        </div> <!-- box-footer -->
      </div> <!-- box without border -->
		</div>

  </div>
</template>

<script>
import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'

export default {
  name: 'InvoiceShow',
  data () {
    return {
      data: [
        { 'item': 1, 'identification': '001', 'description': 'Consectetur adipiscing elit', 'quantity': '10', 'unit_value': '31,00', 'value': '310,00' },
        { 'item': 2, 'identification': '024', 'description': 'Lorem ipsum dolor sit adipiscing elit', 'quantity': '12', 'unit_value': '20,40', 'value': '244,80' },
        { 'item': 3, 'identification': '008', 'description': 'Dolor sit adipiscing elit Lorem ipsum', 'quantity': '22', 'unit_value': '10,00', 'value': '220,00' },
        { 'item': 4, 'identification': '007', 'description': 'Lorem ipsum dolor', 'quantity': '8', 'unit_value': '18,00', 'value': '144,00' },
        { 'item': 5, 'identification': '023', 'description': 'Adipiscing elit ipsum', 'quantity': '14', 'unit_value': '24,50', 'value': '343,00' },
        { 'item': 6, 'identification': '038', 'description': 'Elit Lorem ipsum Adipiscing elit ipsum', 'quantity': '10', 'unit_value': '10,00', 'value': '100,00' },
        { 'item': 7, 'identification': '017', 'description': 'Lorem ipsum dolor', 'quantity': '8', 'unit_value': '18,00', 'value': '144,00' },
        { 'item': 8, 'identification': '001', 'description': 'Consectetur adipiscing elit', 'quantity': '10', 'unit_value': '31,00', 'value': '310,00' },
        { 'item': 9, 'identification': '024', 'description': 'Lorem ipsum dolor sit adipiscing elit', 'quantity': '12', 'unit_value': '20,40', 'value': '244,80' },
        { 'item': 10, 'identification': '008', 'description': 'Dolor sit adipiscing elit Lorem ipsum', 'quantity': '22', 'unit_value': '10,00', 'value': '220,00' },
        { 'item': 11, 'identification': '007', 'description': 'Lorem ipsum dolor', 'quantity': '8', 'unit_value': '18,00', 'value': '144,00' },
        { 'item': 12, 'identification': '023', 'description': 'Adipiscing elit ipsum', 'quantity': '14', 'unit_value': '24,50', 'value': '343,00' },
        { 'item': 13, 'identification': '038', 'description': 'Elit Lorem ipsum Adipiscing elit ipsum', 'quantity': '10', 'unit_value': '10,00', 'value': '100,00' }
      ],
      columns: [
        { field: 'item', label: 'Item', numeric: true},
        { field: 'identification', label: 'Identificação', numeric: true },
        { field: 'description', label: 'Descrição', numeric: false },
        { field: 'quantity', label: 'Quantidade', numeric: true},
        { field: 'unit_value', label: 'Valor Unitário', numeric: false },
        { field: 'value', label: 'Valor', numeric: false }
      ],
      pdfColumns: ['Item', 'Identificação', 'Descrição', 'Quantidade', 'Valor Unitário', 'Valor']
    }
  },
  methods: {
    pdfPrint () {
      console.log('fui clicado')
      const doc = new jsPDF({
        orientation: 'portrait'
      })

      doc.text('fatura', 10, 10)
      const tableHTML = this.$refs.table.innerHTML
      doc.fromHTML(tableHTML, 20, 20)
      const results = this.$refs.results.innerHTML
      doc.fromHTML(results, 30, 30)
      doc.save('a4.pdf')

      // window.print()
      // const doc = new jsPDF({
      //   orientation: 'portrait'
      // })

      // const contentHtml = this.$refs.pdf.innerHTML
      // doc.table(10, 10, this.data, this.pdfColumns)
      // doc.save('sample.pdf')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
