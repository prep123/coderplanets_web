/*
 *
 * SectionLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import Maybe from '../Maybe'

import {
  Wrapper,
  Label,
  Title,
  Desc,
  Divider,
  LabelIcon,
  AddonWrapper,
} from './styles'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:SectionLabel:index')
/* eslint-enable no-unused-vars */

const SectionLabel = ({ title, iconSrc, desc, node, addonNode }) => (
  <Wrapper>
    <Label>
      <LabelIcon src={iconSrc} />
      <Title>{title}</Title>
      <AddonWrapper show={addonNode !== ''}>{addonNode}</AddonWrapper>
    </Label>
    <Divider />
    <Maybe test={desc}>
      <Desc>{desc}</Desc>
    </Maybe>
    <Maybe test={node}>
      <React.Fragment>{node}</React.Fragment>
    </Maybe>
  </Wrapper>
)

SectionLabel.propTypes = {
  // https://www.npmjs.com/package/prop-types
  title: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  desc: PropTypes.string,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  addonNode: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

SectionLabel.defaultProps = {
  iconSrc: `${ICON_CMD}/setting_theme.svg`,
  desc: '',
  node: '',
  addonNode: '',
}

export default SectionLabel