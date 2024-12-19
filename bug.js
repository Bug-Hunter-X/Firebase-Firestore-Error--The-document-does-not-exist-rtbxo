const db = firebase.firestore();

db.collection('cities').doc('BJ').set({
  name: 'Beijing',
  country: 'China'
}) .then(() => {
  console.log('Document written with ID: ', 'BJ');
}) .catch((error) => {
  console.error('Error adding document: ', error);
});