import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          backgroundImage: 'url("https://i.pinimg.com/originals/f8/f8/af/f8f8afe6b746e5775bd3cf6edc100907.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            borderRadius: '10px',
            padding: '20px',
            width: '90%',
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '15%',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <IonAvatar style={{ margin: '0 auto', marginBottom: '20px', width: '100px', height: '100px', overflow: 'hidden' }}>
  <img
    src="https://media3.giphy.com/media/ReOQkSNRCDkrGTLk5O/giphy.gif"
    alt="Black Clover Logo"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</IonAvatar>

          <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>User Login</h2>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput
            style={{ marginTop: '10px' }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton onClick={doLogin} expand="full" shape="round" style={{ marginTop: '20px' }}>
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="full"
            fill="clear"
            shape="round"
            style={{ marginTop: '10px' }}
          >
            Don't have an account? Register here
          </IonButton>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
