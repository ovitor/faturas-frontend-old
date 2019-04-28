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
					      <b>Fatura #301</b><br>
					      <b>Identificação do pedido:</b> 10<br>
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
							<div class="table" ref="table">
                <b-table :data="data" :columns="columns"></b-table>
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
          <b-button type="is-danger" @click="pdfVariables">Negar</b-button>
          <b-button type="is-primary" @click="pdfPrint">Imprimir</b-button>
          <b-button type="is-success">Enviar por e-mail</b-button>
        </div> <!-- box-footer -->
      </div> <!-- box without border -->
		</div>

  </div>
</template>

<script>
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'

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
        // { 'item': 10, 'identification': '008', 'description': 'Dolor sit adipiscing elit Lorem ipsum', 'quantity': '22', 'unit_value': '10,00', 'value': '220,00' },
        // { 'item': 11, 'identification': '007', 'description': 'Lorem ipsum dolor', 'quantity': '8', 'unit_value': '18,00', 'value': '144,00' },
        // { 'item': 12, 'identification': '023', 'description': 'Adipiscing elit ipsum', 'quantity': '14', 'unit_value': '24,50', 'value': '343,00' },
        // { 'item': 13, 'identification': '038', 'description': 'Elit Lorem ipsum Adipiscing elit ipsum', 'quantity': '10', 'unit_value': '10,00', 'value': '100,00' }
      ],
      columns: [
        { field: 'item', label: 'Item', numeric: true},
        { field: 'identification', label: 'Identificação', numeric: true },
        { field: 'description', label: 'Descrição', numeric: false },
        { field: 'quantity', label: 'Quantidade', numeric: true},
        { field: 'unit_value', label: 'Valor Unitário', numeric: false },
        { field: 'value', label: 'Valor', numeric: false }
      ],
      pdfColumns: [],
      pdfData: []
    }
  },
  methods: {
    pdfVariables () {
      if (this.pdfColumns.length !== 0) return;
      for (let e in this.columns) {
        if (e == this.columns.length) break;
        this.pdfColumns.push(this.columns[e]['label'])
      }
      for (let e in this.data) {
        var aux = [
          this.data[e]['item'],
          this.data[e]['identification'],
          this.data[e]['description'],
          this.data[e]['quantity'],
          this.data[e]['unit_value'],
          this.data[e]['value']
        ]
        this.pdfData.push(aux)
      }
    },
    pdfPrint () {
      this.pdfVariables()
      const doc = new jsPDF({
        orientation: 'portrait'
      })

      var pageSize = doc.internal.pageSize;
      var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

      doc.setFontSize(18);
      doc.text('Faturas', 14, 22);

      var generalInfo = 'Gerada em 28/04/2019\nFatura #301\nNúmero do pedido: 12'
      var provider = 'De\nFoo Company\nRua Foo, 32\nFortaleza, CE - 60.115-191\nTelefone: (85) 3231 0925\nE-mail: contact@foo.com'
      var client = 'Para\nACME LTDA\nRua ACME, 1703\nFortaleza, CE - 60.140-320\nTelefone: (85) 3401 2201\nResponsável: Fulano Acme (e-mail: fulano@acme.br)'
      var valueInfo = 'Subtotal: R$ 2.015,00\nTaxa de entrega: R$ 0,00\n\nTotal: R$ 2.015,00'

      // header
      doc.setFontSize(11);
      doc.setTextColor(100);
      doc.setFontStyle('bold');

      doc.text(generalInfo, pageWidth - 14, 22, 'right');

      doc.setFontStyle('normal');

      var provider_text= doc.splitTextToSize(provider,  pageWidth - 35, {})
      var client_text = doc.splitTextToSize(client, pageWidth - 35, {})
      var valueInfo_text= doc.splitTextToSize(valueInfo, pageWidth - 35, {})

      doc.text(provider_text, 14, 35)
      doc.text(client_text, 14, 65)

      doc.setFontSize(18);
      doc.text('Relação de Itens', pageWidth - (pageWidth / 2), 100, 'center')

      doc.autoTable({
        head: [this.pdfColumns],
        body: this.pdfData,
        startY: 105,
        theme: 'plain',
        headStyles: {
          lineWidth: 0.2
        },
        bodyStyles: {
          lineWidth: 0.1
        }
      })

      doc.setFontSize(11);
      doc.setTextColor(100);
      doc.text(valueInfo_text, pageWidth - 14, doc.autoTable.previous.finalY + 10, 'right');

      doc.output("dataurlnewwindow");
      // doc.save('a4.pdf')

      // var elem = document.getElementsByClassName('box-content')[0]
      // html2canvas(document.body)
      //  .then(function (canvas) {
      //    var img = canvas.toDataURL("image/png")
      //    doc.addImage(img, "JPEG", 20, 20)
      //    doc.save('a4.pdf')
      //  })
    }

      // const contentHtml = this.$refs.pdf.innerHTML
      // doc.table(10, 10, this.data, this.pdfColumns)
      // doc.save('sample.pdf')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
