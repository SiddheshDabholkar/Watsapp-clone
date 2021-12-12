import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { countries } from "country-data";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { Box, HStack, Text, Center } from "native-base";

const ViewTypes = {
  FULL: 0,
};

let containerCount = 0;

class CellContainer extends Component {
  constructor(args) {
    super(args);
    this._containerId = containerCount++;
  }
  render() {
    return <View {...this.props}>{this.props.children}</View>;
  }
}

export default class RecycleTestComponent extends Component {
  constructor(args) {
    super(args);
    let country = countries.all;
    let { width } = Dimensions.get("window");
    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
    this._layoutProvider = new LayoutProvider(
      (index) => {
        return ViewTypes.FULL;
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = 50;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);
    this.state = {
      dataProvider: dataProvider.cloneWithRows(country),
    };
  }
  _rowRenderer(type, data) {
    const {
      alpha2,
      alpha3,
      countryCallingCodes,
      currencies,
      emoji,
      ioc,
      languages,
      name,
      status,
    } = data;
    return (
      <HStack>
        <Box w="10%">
          <Center>{emoji}</Center>
        </Box>
        <Box w="70%">
          <Text color="#fff" fontSize={16}>
            {name}
          </Text>
        </Box>
        <Box w="10%">
          <Text color="#fff">{countryCallingCodes[0]}</Text>
        </Box>
        <Center>
          <Box w="10%">y</Box>
        </Center>
      </HStack>
    );
  }
  render() {
    return (
      <Box flex={1} bg="#111827">
        <RecyclerListView
          layoutProvider={this._layoutProvider}
          dataProvider={this.state.dataProvider}
          rowRenderer={this._rowRenderer}
        />
      </Box>
    );
  }
}
