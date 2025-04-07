import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

import { newspaperOutline, trendingUpOutline, personOutline, globeOutline } from 'ionicons/icons';

const Feed: React.FC = () => {
  const newsItems = [
    {
      title: 'NBA Highlights',
      content: 'A quick look at this week’s biggest NBA moments.',
      color: 'success',
      icon: newspaperOutline,
    },
    {
      title: 'Crypto Trends',
      content: 'Bitcoin & Ethereum market update.',
      color: 'warning',
      icon: trendingUpOutline,
    },
    {
      title: 'Trump Update',
      content: 'What’s next for Trump in politics?',
      color: 'primary',
      icon: personOutline,
    },
    {
      title: 'Global Economy',
      content: 'Key insights into the 2025 world economy.',
      color: 'tertiary',
      icon: globeOutline,
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>News Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Headline Section */}
        <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Top Stories</h2>
          <IonRow style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {newsItems.map((item, index) => (
              <IonCard key={index} color={item.color} style={{ minWidth: '200px', marginRight: '10px', display: 'inline-block' }}>
                <IonCardHeader>
                  <IonCardTitle style={{ fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                    <IonIcon icon={item.icon} style={{ marginRight: '8px' }} />
                    {item.title}
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            ))}
          </IonRow>
        </div>

        {/* News Cards in Grid */}
        <IonGrid>
          <IonRow>
            {newsItems.map((item, index) => (
              <IonCol size="12" sizeMd="6" key={index}>
                <IonCard style={{ borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                      <IonIcon icon={item.icon} style={{ marginRight: '8px', color: `var(--ion-color-${item.color})` }} />
                      {item.title}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonItem lines="none">
                      <IonLabel>{item.content}</IonLabel>
                    </IonItem>
                    <IonButton expand="block" color={item.color} style={{ marginTop: '12px' }}>
                      Read More
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
