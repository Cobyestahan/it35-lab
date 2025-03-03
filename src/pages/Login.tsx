import { 
  IonAvatar,
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonInput, 
      IonInputPasswordToggle, 
      IonItem, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
import { logoFacebook, logoIonic } from 'ionicons/icons';
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();
  
    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    return (
      <IonPage>
        <IonContent className='ion-padding'>

        <div style={{
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width:'100%',
                  marginTop:'-10rem',
                  marginBottom:'-18rem',
                }}>
             <IonAvatar
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%', 
                      overflow: 'hidden' 
                    }}
                  >
                    <img alt="Silhouette of a person's head" src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/480702318_1704716230446388_1870732277161640287_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFANaXA_aWUkcZbCiPBlOMCvDo5yBfQnZK8OjnIF9CdkrHKHKonNZr_lSLUd_CkyL7lkADU-OOmG5M5yS7HXCxP&_nc_ohc=TL4xqNY_1lYQ7kNvgHr4PZ-&_nc_oc=AdgdAVvbK1Ae8_23car2KiZvgefkEY4MGAmVyoSNLmNmpWA9ZLxJ8TSXNNIyYKT26XU&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AMnkiZMd3Kd7SHzzZ8dW86b&oh=00_AYCYJLBTJkYuMzfIcXu7Rzgs8aLgO5x3nkU96xMwo8kWnQ&oe=67CB2AED" />
                    {/*
                     <IonIcon 
                      icon={logoFacebook}
                      color='primary'
                      style={{ fontSize: '120px', color: '#6c757d' }} 
                    />
                    */}
                  </IonAvatar>
                  <h1 style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>USER LOGIN</h1>
                    
          </div>
          
            <IonTitle>Login</IonTitle>
          <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

        <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>
            <IonButton onClick={() => doLogin()} expand="full">
                Login
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;