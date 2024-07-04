import './Nav.css';
import sectionData from '../../data/sectionData';




export default function Nav() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">HoHoHomeSchooling</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mx-auto">     
                      {sectionData.map((section,index)=>{
                        return(
                             
                          <li className='text-primary nav-item px-lg-4' key={index}> 
                    
                           <a className="nav-link" href={`#${section.dataSmall.secId}`}  >
                           {section.dataSmall.titleUpper}
                           {section.dataSmall.icon}

                           </a>
                       
                        </li>   
                
                        ) 
                      })}
                        
                    </ul>
                </div>
            </div>
        </nav>
  )
}


// {
//   dataSmall:{secId:'haHaButton',
//               icon:<FontAwesomeIcon icon="fa-regular fa-circle-dot" />,
//               titleUpper:"Ha Ha Button",
//               titleLower:"🤣It is a Best Button Ever😀",
//               img:require(`../assets/img/ha-ha-button.png`),
//               description:"Just click it."},  
//   child: <HaHaButton />
// },
//
