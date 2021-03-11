import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e'
  },
  header: {
    marginTop: 20,
    backgroundColor: '#1e1e1e',
    flexDirection: 'row',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#000080"
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#1e1e1e',
    paddingBottom: 10,
    flexDirection: 'row',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#000080"
  },
  title: {
    color: '#569CD6',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#569CD6',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 40,
  },
  gameboard: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#1e1e1e',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#CE9178'
  },
  row: {
    marginRight: 15,
    marginTop:15,
    marginLeft: 15,
    marginBottom:20,
    padding: 10,
    paddingTop: 20
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    width: 150,
    borderWidth: 3,
    borderColor: "#569CD6",
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#B267E6",
    fontSize: 20
  },
  time: {
    color: '#B5CEA8',
    fontWeight: 'bold',
    fontSize: 23,
  }
});