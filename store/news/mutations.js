export default {
    set_status_start (state) {
      state.status = 'start'
    },

    set_content (state, article) {
      console.log('[debug] state ', state)

      if (article.status === 'fail') {
        state.status = 'fail'
        state.status_msg = article.reason
      }
      else if (article.status === 'success'){
        state.news_title = article.result.title
        state.news_subtitle = article.result.subtitle

        article.result.summary.forEach( (value, index, array) => {
          array[index] = (index + 1).toString() + ". " + array[index]
        })

        state.news_summary = article.result.summary.join('\n')
        state.news_content = article.result.content.join('\n')
        state.status = 'success'
        state.status_msg = 'success'
      }
      else {
        console.log('exception in news/mutations/set_content with not known status')
      }
    }
  }  