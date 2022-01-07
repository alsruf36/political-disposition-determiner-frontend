export default {
    set_content (state, article) {
      state.news_title = article.title
      state.news_subtitle = article.subtitle
      state.news_summary = article.summary
      state.news_content = article.content
      console.log('[debug] state ', state)
    }
  }