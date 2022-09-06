import { Wrapper, Link } from "../style/style"

const  PageHome = () => {

  return (
    <Wrapper>
        <h2>Welcome...</h2>
        <p><b>...stranger</b> :-)</p>
        <img src="https://png2.cleanpng.com/sh/88de41711e21c063063090e1316e146d/L0KzQYm3VsA4N6ZqgpH0aYP2gLBuTfJia5x1edV0LYT1ccfsjL1kdJp1RdN7dD3uebX6TgRzaadqhJ8AYkG8RbbsV8g3QWQ1S5C5N0m4RYi3VsE2Omk4UKs8NUG4RYK5TwBvbz==/kisspng-backpack-travel-clip-art-kids-travel-5b195ee7869303.0795570615283893515512.png" width="10%"/>

        
        <p>why you are here? </p>
        <p>let me know this secret in the... </p>
        <Link href="/comments">comments</Link>
    </Wrapper>
  );
}

export default PageHome;
