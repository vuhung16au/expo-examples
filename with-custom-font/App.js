import React, { useMemo } from "react";
import { ActivityIndicator, Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { Platform } from "react-native";

// Replace dynamic fontMap with static requires
const fontMap = {
  "AnkeCalligraphthuphap": require("./assets/fonts/AnkeCalligraphthuphap.ttf"),
  "DAELC___": require("./assets/fonts/DAELC___.ttf"),
  "hlblatre": require("./assets/fonts/hlblatre.ttf"),
  "hlblong": require("./assets/fonts/hlblong.ttf"),
  "hlbrush1": require("./assets/fonts/hlbrush1.ttf"),
  "hlbrush2": require("./assets/fonts/hlbrush2.ttf"),
  "hlbrush3": require("./assets/fonts/hlbrush3.ttf"),
  "hlcomibm": require("./assets/fonts/hlcomibm.ttf"),
  "hlcomic1": require("./assets/fonts/hlcomic1.ttf"),
  "hlcomic2": require("./assets/fonts/hlcomic2.ttf"),
  "hlgiomuc": require("./assets/fonts/hlgiomuc.ttf"),
  "hlnetbut": require("./assets/fonts/hlnetbut.ttf"),
  "hlnetco1": require("./assets/fonts/hlnetco1.ttf"),
  "hlnhenha": require("./assets/fonts/hlnhenha.ttf"),
  "hlscomic": require("./assets/fonts/hlscomic.ttf"),
  "hlsimple": require("./assets/fonts/hlsimple.ttf"),
  "hltfap4e": require("./assets/fonts/hltfap4e.ttf"),
  "hlthcao": require("./assets/fonts/hlthcao.ttf"),
  "hltphbk2": require("./assets/fonts/hltphbk2.ttf"),
  "hlvgchac": require("./assets/fonts/hlvgchac.ttf"),
  "htf1bkup": require("./assets/fonts/htf1bkup.ttf"),
  "htf3bkup": require("./assets/fonts/htf3bkup.ttf"),
  "Roboto-Italic-VariableFont_wdth,wght": require("./assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
  "Roboto-VariableFont_wdth,wght": require("./assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
  "THUPHAPTHANHCONG3a": require("./assets/fonts/THUPHAPTHANHCONG3a.ttf"),
  "ThuphapXuan": require("./assets/fonts/ThuphapXuan.ttf"),
  "TMC-Ong_Do": require("./assets/fonts/TMC-Ong_Do.ttf"),
  "Tmcongdo": require("./assets/fonts/Tmcongdo.ttf"),
  "UTM_Ong_Do_Gia": require("./assets/fonts/UTM_Ong_Do_Gia.ttf"),
  "UTM_Ong_Do_Tre": require("./assets/fonts/UTM_Ong_Do_Tre.ttf"),
  "UTM_ThuPhap_Thien_An": require("./assets/fonts/UTM_ThuPhap_Thien_An.ttf"),
  "UVNBayBuom_B": require("./assets/fonts/UVNBayBuom_B.ttf"),
  "UVNBayBuom_N": require("./assets/fonts/UVNBayBuom_N.ttf"),
  "UVNBayBuom_R": require("./assets/fonts/UVNBayBuom_R.ttf"),
  "UVNBayBuomHep_B": require("./assets/fonts/UVNBayBuomHep_B.ttf"),
  "UVNBayBuomHep_N": require("./assets/fonts/UVNBayBuomHep_N.ttf"),
  "UVNBayBuomHep_R": require("./assets/fonts/UVNBayBuomHep_R.ttf"),
  "UVNBenXuan_B": require("./assets/fonts/UVNBenXuan_B.ttf"),
  "UVNBenXuan_R": require("./assets/fonts/UVNBenXuan_R.ttf"),
  "UVNBucThu": require("./assets/fonts/UVNBucThu.ttf"),
  "UVNBuiDoi": require("./assets/fonts/UVNBuiDoi.ttf"),
  "UVNButLong1": require("./assets/fonts/UVNButLong1.ttf"),
  "UVNButLong2": require("./assets/fonts/UVNButLong2.ttf"),
  "UVNCoDien_B": require("./assets/fonts/UVNCoDien_B.ttf"),
  "UVNCoDien_R": require("./assets/fonts/UVNCoDien_R.ttf"),
  "UVNConThuy": require("./assets/fonts/UVNConThuy.ttf"),
  "UVNDamCuoi_H": require("./assets/fonts/UVNDamCuoi_H.ttf"),
  "UVNDamCuoi_R": require("./assets/fonts/UVNDamCuoi_R.ttf"),
  "UVNDinhHon": require("./assets/fonts/UVNDinhHon.ttf"),
  "UVNDoiMoi": require("./assets/fonts/UVNDoiMoi.ttf"),
  "UVNDungDan": require("./assets/fonts/UVNDungDan.ttf"),
  "UVNDzungDakao": require("./assets/fonts/UVNDzungDakao.ttf"),
  "UVNGiayTrang_B": require("./assets/fonts/UVNGiayTrang_B.ttf"),
  "UVNGiayTrang_R": require("./assets/fonts/UVNGiayTrang_R.ttf"),
  "UVNHoaDao": require("./assets/fonts/UVNHoaDao.ttf"),
  "UVNHOAKY": require("./assets/fonts/UVNHOAKY.ttf"),
  "UVNHoaTay1": require("./assets/fonts/UVNHoaTay1.ttf"),
  "UVNKeChuyen1": require("./assets/fonts/UVNKeChuyen1.ttf"),
  "UVNKeChuyen2": require("./assets/fonts/UVNKeChuyen2.ttf"),
  "UVNKeChuyen3": require("./assets/fonts/UVNKeChuyen3.ttf"),
  "UVNKieu_B": require("./assets/fonts/UVNKieu_B.ttf"),
  "UVNKieu_R": require("./assets/fonts/UVNKieu_R.ttf"),
  "UVNLYDO_": require("./assets/fonts/UVNLYDO_.ttf"),
  "UVNMangTre": require("./assets/fonts/UVNMangTre.ttf"),
  "UVNMauTim1": require("./assets/fonts/UVNMauTim1.ttf"),
  "UVNMauTim2": require("./assets/fonts/UVNMauTim2.ttf"),
  "UVNMoiHong": require("./assets/fonts/UVNMoiHong.ttf"),
  "UVNMuaThu": require("./assets/fonts/UVNMuaThu.ttf"),
  "UVNMucCham": require("./assets/fonts/UVNMucCham.ttf"),
  "UVNSangSong_B": require("./assets/fonts/UVNSangSong_B.ttf"),
  "UVNSangSong_N": require("./assets/fonts/UVNSangSong_N.ttf"),
  "UVNSangSong_R": require("./assets/fonts/UVNSangSong_R.ttf"),
  "UVNThangVu": require("./assets/fonts/UVNThangVu.ttf"),
  "UVNThuTu": require("./assets/fonts/UVNThuTu.ttf"),
  "UVNVienDu": require("./assets/fonts/UVNVienDu.ttf"),
  "UVNViVi": require("./assets/fonts/UVNViVi.ttf"),
  "Vbutlong": require("./assets/fonts/Vbutlong.ttf"),
  "VNbrique": require("./assets/fonts/VNbrique.ttf"),
  "Vndisney": require("./assets/fonts/Vndisney.ttf"),
  "Vndiudag": require("./assets/fonts/Vndiudag.ttf"),
  "Vnhatban": require("./assets/fonts/Vnhatban.ttf"),
  "Vnhltfap": require("./assets/fonts/Vnhltfap.ttf"),
  "VNI_THUPHAP": require("./assets/fonts/VNI_THUPHAP.ttf"),
  "VNI-Bay_buom": require("./assets/fonts/VNI-Bay_buom.ttf"),
  "VNI-Baybuom": require("./assets/fonts/VNI-Baybuom.ttf"),
  "VNI-Briquet": require("./assets/fonts/VNI-Briquet.ttf"),
  "VNI-Comicbook": require("./assets/fonts/VNI-Comicbook.ttf"),
  "VNI-Disney": require("./assets/fonts/VNI-Disney.ttf"),
  "VNI-HL_Thu_fap": require("./assets/fonts/VNI-HL_Thu_fap.ttf"),
  "VNI-HLThuphap": require("./assets/fonts/VNI-HLThuphap.ttf"),
  "VNI-Matisse": require("./assets/fonts/VNI-Matisse.ttf"),
  "VNI-Netbut": require("./assets/fonts/VNI-Netbut.ttf"),
  "VNI-Nhatban": require("./assets/fonts/VNI-Nhatban.ttf"),
  "VNI-Ong_do": require("./assets/fonts/VNI-Ong_do.ttf"),
  "VNI-Ongdo": require("./assets/fonts/VNI-Ongdo.ttf"),
  "VNI-Slogan": require("./assets/fonts/VNI-Slogan.ttf"),
  "VNI-Thu_fap2": require("./assets/fonts/VNI-Thu_fap2.ttf"),
  "VNI-Thu_fap3": require("./assets/fonts/VNI-Thu_fap3.ttf"),
  "VNI-Thu_fapf": require("./assets/fonts/VNI-Thu_fapf.ttf"),
  "VNI-Thu_fapfan": require("./assets/fonts/VNI-Thu_fapfan.ttf"),
  "VNI-Thufap2": require("./assets/fonts/VNI-Thufap2.ttf"),
  "VNI-Thufap3": require("./assets/fonts/VNI-Thufap3.ttf"),
  "VNI-Thufapfan": require("./assets/fonts/VNI-Thufapfan.ttf"),
  "VNI-Thuphap": require("./assets/fonts/VNI-Thuphap.ttf"),
  "VNI-Truck": require("./assets/fonts/VNI-Truck.ttf"),
  "VNI-Trung_Kien": require("./assets/fonts/VNI-Trung_Kien.ttf"),
  "VNI-Viet_tay": require("./assets/fonts/VNI-Viet_tay.ttf"),
  "VNI-Viettay": require("./assets/fonts/VNI-Viettay.ttf"),
  "VNI-VT": require("./assets/fonts/VNI-VT.ttf"),
  "VNI-Whimsy": require("./assets/fonts/VNI-Whimsy.ttf"),
  "VNI-Yahoo": require("./assets/fonts/VNI-Yahoo.ttf"),
  "vnibaybuom": require("./assets/fonts/vnibaybuom.ttf"),
  "Vnibbuom": require("./assets/fonts/Vnibbuom.ttf"),
  "vnibriquet": require("./assets/fonts/vnibriquet.ttf"),
  "VNICOMIC": require("./assets/fonts/VNICOMIC.ttf"),
  "VNIMATIS": require("./assets/fonts/VNIMATIS.ttf"),
  "vnimatisse": require("./assets/fonts/vnimatisse.ttf"),
  "vniongdo": require("./assets/fonts/vniongdo.ttf"),
  "vnithufap": require("./assets/fonts/vnithufap.ttf"),
  "vnithufap2": require("./assets/fonts/vnithufap2.ttf"),
  "vnithufap3": require("./assets/fonts/vnithufap3.ttf"),
  "vnithufapfan": require("./assets/fonts/vnithufapfan.ttf"),
  "vnithuphapslogan": require("./assets/fonts/vnithuphapslogan.ttf"),
  "Vnitruck": require("./assets/fonts/Vnitruck.ttf"),
  "vniviettay": require("./assets/fonts/vniviettay.ttf"),
  "Vniyahoo": require("./assets/fonts/Vniyahoo.ttf"),
  "Vnnetbut": require("./assets/fonts/Vnnetbut.ttf"),
  "Vntfap01": require("./assets/fonts/Vntfap01.ttf"),
  "Vnthcao": require("./assets/fonts/Vnthcao.ttf"),
  "Vnthfap2": require("./assets/fonts/Vnthfap2.ttf"),
  "Vnthfap3": require("./assets/fonts/Vnthfap3.ttf"),
  "Vnthfapf": require("./assets/fonts/Vnthfapf.ttf"),
  "VNthufap": require("./assets/fonts/VNthufap.ttf"),
  "Vnvietay": require("./assets/fonts/Vnvietay.ttf"),
  "Vnwhimsy": require("./assets/fonts/Vnwhimsy.ttf"),
  "Vongdohl": require("./assets/fonts/Vongdohl.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(fontMap);

  const fontNames = useMemo(() => Object.keys(fontMap), []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <Text>Loading custom fonts...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.defaultText}>This is the default system font.</Text>
        {fontNames.map((font) => (
          <Text key={font} style={[styles.demoText, { fontFamily: font }]}>{`${font}: với những đường nét uyển chuyển, mềm mại nhưng đầy sự chắc chắn và tinh tế`}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  scrollContent: {
    padding: 16,
    alignItems: "center",
  },
  defaultText: {
    fontSize: 18,
    marginBottom: 16,
  },
  demoText: {
    fontSize: 20,
    marginBottom: 12,
    color: '#222',
  },
});
