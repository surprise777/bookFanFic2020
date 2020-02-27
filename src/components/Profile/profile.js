import React from "react"
import Container from "../../containers/mui/container"
import styles from "./profile.module.css"

class Profile extends React.Component {
    state = {
      login_status: false
    }
    
    render() {
        return (
            <div className={styles.page_content}>
            <Container>
                <div className={styles.user_info}>

                    <img 
                      className={styles.user_ProfilePic} 
                      src={require('./static/my_icon.jpg')}
                    />
                    <h3>Name: {'Nick1225'}</h3>
                    <h3>Address: {'50 Charles St E'}</h3>
                    <h3>Email: {'N/A'}</h3>
                    <h3>Phone: {'N/A'}</h3>
                    <h3>FaceBook: {'N/A'}</h3>
                </div>





            </Container>
            <img className={styles.user_banner} src={require('./static/uoft_banner.jpeg')}/>
            <div className={styles.recommended_books}>
                <p>
                    <img className={styles.book} src={require('./static/uoft_banner.jpeg')}/>
                </p>
                

            </div>
            
            
            </div>
        )
    }
}

export default Profile;
