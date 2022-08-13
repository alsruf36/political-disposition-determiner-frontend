export default {
    set_status_start (state) {
      state.status = 'start'
    },

    set_status_fail (state, msg) {
      state.status = 'fail'
      state.status_msg = msg
    },

    set_content (state, article) {
      console.log('[debug] state ', state)
      state.news_title = article.title
      state.news_subtitle = article.subtitle

      article.summary.forEach( (value, index, array) => {
        array[index] = (index + 1).toString() + ". " + array[index]
      })

      state.news_summary = article.summary.join('\n')
      state.news_content = article.content.join('\n')
      state.status = 'success'
      state.status_msg = 'success'
    }
  }  