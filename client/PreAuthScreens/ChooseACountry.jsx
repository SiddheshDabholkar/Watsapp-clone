import React, { memo, useMemo, useLayoutEffect, useState, useRef } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { countries } from "country-data";
import { Box, HStack, Text, Center, Icon, Input } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";

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
        <Box w="10%">
          <Icon as={<AntDesign />} size="sm" name="check" color="#009658" />
        </Box>
      </Center>
    </HStack>
  );
};

const dataProviderMaker = (data) =>
  new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);

const ChooseACountry = memo(({ navigation }) => {
  const [show, setShow] = useState(false);
  const [search, onChangeSearch] = useState("");

  const country = countries.all;
  const SearchedCountry = country.filter((d) => {
    return d.name.includes(search);
  });

  const data = SearchedCountry.length > 0 ? SearchedCountry : country;

  const _layoutProvider = useRef(layoutMaker()).current;
  const dataProvider = useMemo(() => dataProviderMaker(data), [data]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (!show) {
          return (
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Box p="2">
                <Ionicons name="search" size={24} color="#fff" />
              </Box>
            </TouchableOpacity>
          );
        } else return null;
      },
      headerLeft: () => {
        if (show) {
          return (
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Box p="2">
                <Ionicons name="arrow-back-sharp" size={24} color="#fff" />
              </Box>
            </TouchableOpacity>
          );
        } else return false;
      },
      headerTitle: (props) => {
        if (show) {
          return (
            <Input
              variant="unstyled"
              color="#fff"
              fontSize={18}
              value={search}
              onChangeText={onChangeSearch}
              placeholder="Search countries"
              placeholderTextColor="gray.500"
              width="88%"
              selectionColor={"#fff"}
            />
          );
        } else {
          return (
            <Text color="#fff" bold fontSize={20}>
              {props.children}
            </Text>
          );
        }
      },
      headerBackVisible: show ? false : true,
      headerTintColor: "#fff",
    });
  }, [navigation, show, search]);

  return (
    <Box flex={1} bg="#111827">
      <RecyclerListView
        layoutProvider={_layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
      />
    </Box>
  );
});

export default ChooseACountry;
