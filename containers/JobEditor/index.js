/*
 *
 * jobEditor
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import ArticleEditFooter from '../../components/ArticleEditFooter'

import Editor from './Editor'
import Preview from './Preview'
import MarkDownHelper from './MarkDownHelper'
import Header from './Header'

import { Wrapper, ViewerWrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import { init, uninit, changeView, onPublish, canclePublish } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:JobEditor')

// const View = ({ curView, thread, copyRight, title, body, linkAddr }) => {
const View = ({
  isEdit,
  curView,
  thread,
  editData,
  mentionList,
  contentDomId,
}) => {
  if (curView === 'CREATE_VIEW' || curView === 'PREVIEW_VIEW') {
    return (
      <React.Fragment>
        <ViewerWrapper active={curView === 'CREATE_VIEW'}>
          <Editor
            isEdit={isEdit}
            thread={thread}
            editData={editData}
            mentionList={mentionList}
          />
        </ViewerWrapper>
        <ViewerWrapper active={curView === 'PREVIEW_VIEW'}>
          <Preview
            editData={editData}
            contentDomId={contentDomId}
            onBack={changeView.bind(this, 'CREATE_VIEW')}
          />
        </ViewerWrapper>
      </React.Fragment>
    )
  }
  return <MarkDownHelper />
}

// TODO: use input in old IE
class JobEditorContainer extends React.Component {
  // must use constructor, Draft thing
  constructor(props) {
    super(props)
    const { jobEditor, attachment } = props

    init(jobEditor, attachment)
  }

  componentWillUnmount() {
    debug('TODO: store state to localstarange')
    uninit()
  }

  render() {
    const { jobEditor } = this.props

    const {
      copyRight,
      thread,
      curView,
      publishing,
      success,
      error,
      warn,
      isEdit,
      statusMsg,
      editData,
      mentionListData,
      referUsersData,
      contentDomId,
    } = jobEditor

    return (
      <Wrapper>
        <Header isEdit={isEdit} curView={curView} referUsers={referUsersData} />
        <View
          isEdit={isEdit}
          curView={curView}
          editData={editData}
          thread={thread}
          copyRight={copyRight}
          mentionList={mentionListData}
          contentDomId={contentDomId}
        />
        <ArticleEditFooter
          isEdit={isEdit}
          publishing={publishing}
          success={success}
          error={error}
          warn={warn}
          statusMsg={statusMsg}
          onCancle={canclePublish}
          onPublish={onPublish}
        />
      </Wrapper>
    )
  }
}

// JobEditorContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// closePreview: PropTypes.func.isRequired,
// }

// JobEditorContainer.defaultProps = {}

export default inject(storePlug('jobEditor'))(observer(JobEditorContainer))
