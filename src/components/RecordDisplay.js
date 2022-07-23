app.component('record-display', {
  template:
  /* html */
  `
  <purchase-form @record-submitted="addNewRecord"></purchase-form>
  <purchase-history
    v-if="records.length"
    :records="records">
  </purchase-history>
  `,

  data() {
    return {
      records: [],
    };
  },

  methods: {
    addNewRecord(record) {
      this.records.push(record);
    },
  },
});
