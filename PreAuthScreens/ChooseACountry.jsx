import React, { memo, useMemo, useRef } from "react";
import { Dimensions } from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { countries } from "country-data";
import { Box, HStack, Text, Center } from "native-base";

const ViewTypes = {
  FULL: 0,
};

let { width } = Dimensions.get("window");

const layoutMaker = () =>
  new LayoutProvider(
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

const rowRenderer = (type, data) => {
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
};

const dataProviderMaker = (data) =>
  new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);

const ChooseACountry = memo(() => {
  const country = countries.all;
  const _layoutProvider = useRef(layoutMaker()).current;
  const listView = useRef();
  const dataProvider = useMemo(() => dataProviderMaker(country), [country]);

  return (
    <Box flex={1} bg="#111827">
      <RecyclerListView
        ref={listView}
        layoutProvider={_layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
      />
    </Box>
  );
});

export default ChooseACountry;
