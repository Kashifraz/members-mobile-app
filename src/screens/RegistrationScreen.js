import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import PersonalInfo from '../components/PersonalInfo';
import OccupationEducation from '../components/OccupationEducation';
import ContactInfo from '../components/ContactInfo';
import GeoLocation from '../components/GeoLocation';
import RegistrationInfo from '../components/RegistrationInfo';
import Address from '../components/Address';

const RegistrationScreen = () => {
  //Textual Form input fields are stored in this state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    fatherName: '',
    cnic: '',
    gender: '',
    geographical_address: '',
    local_jamat: '',
    city: '',
    village: '',
    postal_address: '',
    occupation: '',
    education: '',
    home_phone: '',
    office_phone: '',
    mobile: '',
  });

  //stepper flags
  const [currentStep, setCurrentStep] = useState(0);
  const [slideAnim] = useState(new Animated.Value(0));
  const steps = ['Personal', 'Geo', 'Occupation', 'Contact'];

  //state variables for date input fields
  const [dob, setDob] = useState(new Date());
  const [membershipDate, setMembershipDate] = useState(new Date());

  //flags to toggle date pickers and drop downs
  const [showDoB, setShowDoB] = useState(false);
  const [showMembership, setShowMembership] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showDestrict, setShowDestrict] = useState(false);
  const [showConstituency, setShowConstituency] = useState(false);
  const [showUnionCouncil, setShowUnionCouncil] = useState(false);
  const [showWard, setShowWard] = useState(false);
  const [loading, setLoading] = useState(false);

  //drop down selected values
  const [gender, setGender] = useState(null);
  const [destrict, setDestrict] = useState(null);
  const [constituency, setConstituency] = useState(null);
  const [unioncouncil, setUnionCouncil] = useState(null);
  const [ward, setward] = useState(null);

  //drop down lists
  const [genderList, setGenderList] = useState([
    {label: 'Male', value: 1},
    {label: 'Female', value: 2},
  ]);

  const [destrictList, setDestrictList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  // get all Districts
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://213.199.59.195/api/districts');
        if (response.data) {
          const formattedDistricts = response.data.map(d => ({
            label: d.affiliation_title,
            value: d.id,
          }));
          setDestrictList(formattedDistricts);
        } else {
          setDestrictList([]);
        }
      } catch (error) {
        console.error('Error fetching districts:', error);
        Alert.alert('Error', 'Failed to fetch districts');
        setDestrictList([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [constituencyList, setConstituencyList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  const fetchConstituencies = async districtId => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://213.199.59.195/api/district/${districtId}/constituencies`,
      );
      if (response.data) {
        const formattedConstituencies = response.data.map(c => ({
          label: c.constituency_title,
          value: c.id,
        }));
        setConstituencyList(formattedConstituencies);
      } else {
        setConstituencyList([]);
      }
    } catch (error) {
      setConstituencyList([]);
    } finally {
      setLoading(false);
    }
  };

  const [unionCouncilList, setUnionCouncilList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  const fetchUnionCouncils = async constituencyId => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://213.199.59.195/api/constituency/${constituencyId}/unioncouncils`,
      );
      if (response.data) {
        const formattedConstituencies = response.data.map(c => ({
          label: c.union_council_title,
          value: c.id,
        }));
        setUnionCouncilList(formattedConstituencies);
      } else {
        setUnionCouncilList([]);
      }
    } catch (error) {
      setUnionCouncilList([]);
    } finally {
      setLoading(false);
    }
  };

  const [wardList, setWardList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  const fetchwards = async unionCouncilId => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://213.199.59.195/api/unioncouncil/${unionCouncilId}/wards`,
      );
      if (response.data) {
        const formattedConstituencies = response.data.map(c => ({
          label: c.ward_title,
          value: c.id,
        }));
        setWardList(formattedConstituencies);
      } else {
        setWardList([]);
      }
    } catch (error) {
      setWardList([]);
    } finally {
      setLoading(false);
    }
  };

  //handler for date input field
  const onChangeDob = (event, selectedDate) => {
    setShowDoB(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  const onChangeMDate = (event, selectedDate) => {
    setShowMembership(false);
    if (selectedDate) {
      setMembershipDate(selectedDate);
    }
  };

  //toggling date pickers
  const showDatepickerDoB = () => {
    setShowDoB(true);
  };

  const showDatepickerMembership = () => {
    setShowMembership(true);
  };

  const nextStep = () => {
    Animated.timing(slideAnim, {
      toValue: -currentStep * 300, // Assuming each step is 300px wide
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentStep(prevStep => prevStep + 1);
    });
  };

  const prevStep = () => {
    Animated.timing(slideAnim, {
      toValue: -(currentStep - 2) * 300, // Adjust accordingly
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentStep(prevStep => prevStep - 1);
    });
  };

  //textual input change handler
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToastMessages = errors => {
    const errorEntries = Object.entries(errors);
    let delay = 0;

    errorEntries.forEach(([key, value]) => {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `${key}: ${value.join(', ')}`,
        });
      }, delay);
      delay += 1000; // 2 seconds delay between each toast
    });
  };

  //submit the form using register Member api
  const handleSubmit = async () => {
    const member = {
      username: 'jodog',
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      name: formData.name,
      father_name: formData.fatherName,
      cnic: formData.cnic,
      dob: dob ? moment(dob).format('YYYY-MM-DD') : null,
      gender: gender,
      membership_date: membershipDate
        ? moment(membershipDate).format('YYYY-MM-DD')
        : null,
      affiliations: destrict,
      constituency: constituency,
      union_council: unioncouncil,
      ward: ward,
      geographical_address: formData.geographical_address,
      local_jamat: formData.local_jamat,
      city: formData.city,
      village: formData.village,
      mailing_address: formData.postal_address,
      occupation: formData.occupation,
      education: formData.education,
      home_phone: formData.home_phone,
      office_phone: formData.office_phone,
      mobile_phone: formData.mobile,
    };
    console.log(member);
    try {
      const response = await axios.post(
        'http://213.199.59.195/api/member/store',
        member,
      );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Member registered successfully',
      });
    } catch (error) {
      const errors = error.response.data;
      showToastMessages(errors);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <RegistrationInfo formData={formData} handleChange={handleChange} />
        );
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            gender={gender}
            genderList={genderList}
            showGender={showGender}
            setShowGender={setShowGender}
            setGender={setGender}
            setGenderList={setGenderList}
            dob={dob}
            showDatepickerDoB={showDatepickerDoB}
            showDoB={showDoB}
            onChangeDob={onChangeDob}
            membershipDate={membershipDate}
            showDatepickerMembership={showDatepickerMembership}
            showMembership={showMembership}
            onChangeMDate={onChangeMDate}
          />
        );
      case 2:
        return (
          <GeoLocation
            formData={formData}
            handleChange={handleChange}
            destrict={destrict}
            destrictList={destrictList}
            showDestrict={showDestrict}
            setShowDestrict={setShowDestrict}
            setDestrict={setDestrict}
            setDestrictList={setDestrictList}
            constituency={constituency}
            constituencyList={constituencyList}
            showConstituency={showConstituency}
            setShowConstituency={setShowConstituency}
            setConstituency={setConstituency}
            setConstituencyList={setConstituencyList}
            unioncouncil={unioncouncil}
            unionCouncilList={unionCouncilList}
            showUnionCouncil={showUnionCouncil}
            setShowUnionCouncil={setShowUnionCouncil}
            setUnionCouncil={setUnionCouncil}
            setUnionCouncilList={setUnionCouncilList}
            ward={ward}
            wardList={wardList}
            showWard={showWard}
            setShowWard={setShowWard}
            setward={setward}
            setWardList={setWardList}
            fetchConstituencies={fetchConstituencies}
            fetchUnionCouncils={fetchUnionCouncils}
            fetchwards={fetchwards}
          />
        );
      case 3:
        return <Address formData={formData} handleChange={handleChange} />;
      case 4:
        return (
          <OccupationEducation
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 5:
        return <ContactInfo formData={formData} handleChange={handleChange} />;
      default:
        return (
          <RegistrationInfo formData={formData} handleChange={handleChange} />
        );
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
        {renderStep()}
        <View style={styles.buttonContainer}>
          {currentStep > 0 && (
            <TouchableOpacity style={styles.button} onPress={prevStep}>
              <Text style={styles.buttonText}>Prev</Text>
            </TouchableOpacity>
          )}
          {currentStep < 5 && (
            <TouchableOpacity style={styles.button} onPress={nextStep}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
          {currentStep === 5 && (
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  inputText: {
    color: 'black',
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
 
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    color: 'black',
  },
  date: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dateText: {
    fontSize: 16,
    color: 'black',
  },
  dropDownContainer: {
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
  },
});

export default RegistrationScreen;
