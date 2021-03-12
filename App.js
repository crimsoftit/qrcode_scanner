/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	Linking
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, { Component } from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';

export default class App extends Component {

	state = {
		qr: ""
	}

	onRead = e => {
		this.setState({ qr: e.data })
		//console.log(e);
	}
	render() {
		return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>

					<QRCodeScanner
						onRead={this.onRead}
					/>

					{this.state.qr ? <QRCode 
						value={this.state.qr}
					/> : null}
					


					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}>Engine: Hermes</Text>
						</View>
					)}


					
				
				</ScrollView>
			</SafeAreaView>
		</>
		)
	}
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
