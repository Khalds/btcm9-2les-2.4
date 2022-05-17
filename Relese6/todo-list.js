function createTodoList() {
  const todoListObject = {
    items: [{
        text: "Завершить текущий челлендж",
        completed: false
      },
      {
        text: "Отдохнуть во время перерыва",
        completed: false
      },
      {
        text: "Помочь напарнику понять код",
        completed: false
      },
      {
        text: "Выиграть в мафию",
        completed: true
      },
    ],
    printAll: function () {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].completed == true) {
          console.log(`[x] ${this.items[i].text}`);
        } else {
          console.log(`[ ] ${this.items[i].text}`);
        }
      }
    },
    add: function (userText) {
      this.items.unshift({
        text: userText,
        completed: false
      })
    },
    remove: function (rem) {
      this.items.splice(rem, 1)
    },

    print: function (i) {
      if (this.items[i].completed == true) {
        console.log(`[x] ${this.items[i].text}`);
      } else {
        console.log(`[ ] ${this.items[i].text}`);
      }
    },
    complete: function (i) {
      this.items[i].completed = true;
    }
  }

  return todoListObject;
}

const todoList = createTodoList();