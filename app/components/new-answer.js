var params = {
      title: this.get('title'),
      author: this.get('author'),
+        question: this.get('question')
    };
    this.set('addNewAnswer', false);
    this.sendAction('saveAnswer', params);
