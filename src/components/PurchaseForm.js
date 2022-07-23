app.component('purchase-form', {
  template: 
  /* html */
  `
  <form class="form">
    <label for="money-amount">金額</label>
    <input id="money-amount" type="number" min="1" max="10000000" required>

    <label for="category">カテゴリー</label>
    <select id="category" name="category" required>
      <option value="placeholder" selected disabled>選択する</option>
      <option value="food">食事</option>
      <option value="traffic">交通</option>
      <option value="entertainment">エンタメ</option>
      <option value="study">勉強</option>
    </select>

    <label for="date">日付</label>
    <input id="date" type="datetime-local" min="2000-01-01T00:00" max="2099-12-31T23:59" step="3600" required>

    <label for="place">場所</label>
    <input id="place" type="text">

    <label for="memo">メモ</label>
    <textarea name="memo" id="memo" cols="30" rows="4"></textarea>
  </form>
  `
})
