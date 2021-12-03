import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useRef, useState, useEffect} from "react";

const Home: React.FC = () => {
	const[data, setData] = useState('');
	const url = "http://localhost/api/insert_new_student.php";
	const nim = useRef<HTMLIonInputElement>(null);
	const nama = useRef<HTMLIonInputElement>(null);
	const prodi = useRef<HTMLIonInputElement>(null);
	
	const [selectedFile, setSelectedFile] = useState<File>();
	
	const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setSelectedFile(event.target!.files![0])};
	
	const insertHandler = () => {
		const FormData = require('form-data');
		const formData = new FormData();
		
		const inNim = nim.current?.value as string;
		const inNama = nama.current?.value as string;
		const inProdi = prodi.current?.value as string;
		
		formData.append('nim', inNim);
		formData.append('nama', inNama);
		formData.append('prodi', inProdi);
		formData.append('foto', selectedFile as File);
	};
	
	axios.post(url, formData).then(res => {
		console.log(res);
	});
	
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
		<IonItem>
			<IonLabel position="floating">NIM</IonLabel>
			<IonInput ref={nim}></IonInput>
		</IonItem>
		<IonItem>
			<IonLabel position="floating">Nama</IonLabel>
			<IonInput ref={nama}></IonInput>
		</IonItem>
		<IonItem>
			<IonLabel position="floating">Prodi</IonLabel>
			<IonInput ref={prodi}></IonInput>
		</IonItem>
		<IonItem>
			<input type="file" onChange={fileChangeHandler} />
		</IonItem>
		<IonButton onClick={insertHandler}>Simpan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
