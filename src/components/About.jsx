import aboutImg from '../assets/about.webp'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className='container main-container'>
          <SectionTitle text='about us' />
          <div className='grid lg:grid-cols-2 gap-6'>
              <div className='grid place-items-center'>
                  <img src={aboutImg} alt="about-img" className='rounded-lg' />
              </div>
              <div className='flex justify-center flex-col'>
              <h2 className='text-2xl lg:text-3xl font-semibold mb-4 lg:mb-5'>About Us</h2>
                  <p className='md:text-lg lg:text-xl '>
                  Welcome to CineHub, your ultimate destination for all things movies and TV shows. Whether you're a casual viewer or a hardcore cinephile, we've got something for everyone.
                  </p>
                  <div className=' mt-4 lg:mt-5'>
                  <h2 className='text-2xl lg:text-3xl font-semibold mb-4 lg:mb-5'>Our Mission</h2>
                  <p className='md:text-lg lg:text-xl '>Our mission is to provide a comprehensive and user-friendly platform where movie enthusiasts can discover, explore, and discuss their favorite films and TV shows.</p>
                </div>
              </div>
          </div>
      </div>
  )
}

export default About