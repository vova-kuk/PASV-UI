const email = Math.random() + 'rtuewwk@gmail.com';
const password = 'password';

const newUserData = {
  firstName: 'John',
  lastName: 'Morgan',
  password: password,
  phone: '14158706170',
  email: email,
  about: 'I am a student',
  goals: 'eat sleep code repeat',
  englishLevel: 'Upper intermediate',
};

const pageRegisterData = {
  h1: 'User Register',
  warningText: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
};

const successfulNotificationData = {
  successfulNotification: 'User created successfully. Please check your email and verify it',
};
export { newUserData, pageRegisterData, successfulNotificationData };
