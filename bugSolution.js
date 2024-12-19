const db = firebase.firestore();
db.collection('cities').doc('BJ').get().then((doc) => {
  if (doc.exists) {
    // Document exists, perform operation
    db.collection('cities').doc('BJ').update({
      name: 'Beijing Updated',
      country: 'China'
    }).then(() => {
      console.log('Document updated successfully!');
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
  } else {
    // Document doesn't exist, create it
    db.collection('cities').doc('BJ').set({
      name: 'Beijing',
      country: 'China'
    }).then(() => {
      console.log('Document created successfully!');
    }).catch((error) => {
      console.error('Error creating document: ', error);
    });
  }
}).catch((error) => {
  console.error('Error getting document: ', error);
});