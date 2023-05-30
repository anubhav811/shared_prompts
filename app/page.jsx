import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center"> AI Powered Prompts</span></h1>
        <p className="desc text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eveniet non eos deserunt architecto nisi accusantium eaque molestias quisquam a quis in deleniti praesentium possimus, similique nobis cupiditate perferendis dicta.
        </p>

        <Feed/>
    </section>
  )
}

export default Home