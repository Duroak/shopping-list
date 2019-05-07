function shopping() {
    //add list item 
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let item = $(event.currentTarget).find('#shopping-list-entry').val();
        $('.shopping-list').append(getTemplateItem(item));
    });

    // remove item 
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest("li").remove();
    });

    //toggle class
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        let ele = $(this).closest("li").find(".shopping-item");
        ele.toggleClass("shopping-item__checked");
     });
}

//template literal
function getTemplateItem(shoppingListItem) {
    return `<li>
    <span class="shopping-item">${shoppingListItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}

$(shopping)