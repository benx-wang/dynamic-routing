import Header from '../components/header'

const About = ({count}) => (
  <>
    <Header />
    <h1>About page {count}</h1>
  </>
)

export async function getStaticProps() {
  let count = 0
  setInterval(() => count++, 1000)
  return {
    props: {count},
    revalidate: 60
  }
}

export default About
