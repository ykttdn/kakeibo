app.component('purchase-history', {
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
  template:
  /* html */
  `
  <ul>
    <li v-for="record in records">
      {{ record.moneyAmount }}円，{{ record.category }}，{{ record.date }}，
      {{ record.place }}<br>
      {{ record.memo }}
    </li>
  </ul>
  `,


});
