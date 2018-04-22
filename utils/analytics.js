import { Global } from '../utils'

// https://analytics.google.com/analytics/web/?hl=zh-CN&pli=1#/embed/report-home/a39874160w174341184p173551323

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  Global.gtag('config', process.env.GA_TRACING_ID, {
    page_location: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
/*
  report event like this:
  GA.event({
    action: 'submit_form',
    category: 'Contact',
    label: this.state.message
  })
*/

export const event = ({ action, category, label, value }) => {
  Global.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
