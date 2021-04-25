import Header from '../components/header'

const About = () => (
  <>
    <Header />
    <h1>About page</h1>
  </>
)

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60
  }
}

export default About
