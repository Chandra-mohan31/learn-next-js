import headerStyles from "../styles/Header.module.css";


function Header() {
    const x = 1;

    return (
        <div>
            <h1 className='title'>
                <span>News Articles</span>
            </h1>

            <style jsx>
                {
                    `
                    .title{
                        color: ${x>3 ? 'red' : 'blue' } 
                    }`
                }
            </style>
        </div>
    )
}

export default Header
