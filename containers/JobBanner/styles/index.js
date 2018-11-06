import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const BaseBanner = styled.nav`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`
export const BaseBannerContent = styled.div`
  ${cs.flex()};
  margin-left: 8%;
  margin-right: 8%;
`
export const BannerContainer = styled(BaseBanner)`
  height: 100px;
  min-height: 100px;
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  ${cs.flex()};
`
export const PostBrief = styled.div`
  ${cs.flexColumnGrow()};
  width: 60%;
`

export const Title = styled.div`
  font-size: 1.6em;
  color: ${theme('thread.articleTitle')};

  ${cs.truncate('100%')};
`
export const Desc = styled.div`
  ${cs.flex()};
  align-items: center;
  margin-top: 5px;
  font-size: 0.9rem;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  ${cs.circle('25px')};
  margin-right: 5px;
`
export const MarkTag = styled.div`
  font-size: 0.8em;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid;
  border-color: tomato;
  color: tomato;
  margin-right: 8px;
`