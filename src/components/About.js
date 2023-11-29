import '../css/about.css';

function About(){
    return(
        <>
            <h1 style={{'marginTop': '3%'}}>WELCOME TO ABOUT PAGE</h1>
            <img className='image-fit' src='./images-for-website/team-work.jpg' alt='picture of teamwork'/>
            <p style={{'marginBottom': '3%'}}>This is flatsocial and we work as a team</p>
        </>
    )
}

export default About;