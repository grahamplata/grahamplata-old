import styled from 'styled-components'

const Base = styled.div`
  h2 {
    font-size: 1.99rem;
    margin-top: 2em;
  }
  h3 {
    font-weight: 600;
    font-size: 1.324rem !important;
    margin-top: 0.5em;
    text-size-adjust: 100%;
  }
  h3:nth-last-child(2) {
    margin-bottom: 0.8em;
  }
`

export const BlogContainer = styled(Base)`
  p {
    cursor: default;
    // text-size-adjust: 100%;
    padding-bottom: 0.8em;
  }
  li {
    list-style-type: none;
  }
`
