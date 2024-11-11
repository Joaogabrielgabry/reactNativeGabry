import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { FaMoneyBill } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import { CgShapeHexagon } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.balance}>
          <IoMdClose style={styles.iconTopLeft} size={20} color="#fff" />
          <FaRegQuestionCircle style={styles.iconTopRight} size={20} color="#fff" />
        </View>
        <Text style={styles.money}>Área Pix</Text>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>Envie e receba pagamentos a qualquer</Text>
          <Text style={styles.description}>hora e dia da semana, sem pagar nada</Text>
          <Text style={styles.description}>por isso</Text>
        </View>
        <View style={styles.ferramentasPix}>
          <View style={styles.iconViewTotal}>
            <View style={styles.iconView}>
              <FaMoneyBill size={28} color="#fff" />
            </View>
            <Text style={styles.descriptionIcon}>Transferir</Text>
          </View>
          <View style={styles.iconViewTotal}>
            <View style={styles.iconView}>
              <FaRegCalendar size={28} color="#fff" />
            </View>
            <Text style={styles.descriptionIcon}>Programar</Text>
          </View>
          <View style={styles.iconViewTotal}>
            <View style={styles.iconView}>
              <FaQrcode size={28} color="#fff" />
            </View>
            <Text style={styles.descriptionIcon}>Ler QR code</Text>
          </View>
        </View>
        <View style={styles.ferramentasPix}>
          <View style={styles.iconViewTotal}>
            <View style={styles.iconView}>
              <IoCopy size={28} color="#fff" />
            </View>
            <Text style={styles.descriptionIcon}>Pix Copia e Cola</Text>
          </View>
          <View style={styles.iconViewTotal}>
            <View style={styles.iconView}>
              <RiMoneyDollarBoxLine size={28} color="#fff" />
            </View>
            <Text style={styles.descriptionIcon}>Cobrar</Text>
          </View>
          <View style={styles.iconViewTotal}>
            <View style={styles.iconView}>
              <FaMoneyBill size={28} color="#fff" />
            </View>
            <Text style={styles.descriptionIcon}>Depositar</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.footer}>
        <Text style={styles.footerTextTop}>Preferencias</Text>
        <View style={styles.footerContent}>
          <View style={styles.footerContentLeft}>
            <MdOutlineShield style={styles.arrow} size={20} color="#fff" />
            <Text style={styles.footerText}>Registrar ou trazer chaves</Text>
          </View>
          <View style={styles.footerContentRight}>
            <IoIosArrowForward style={styles.arrow} size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.lineFt} />
        <View style={styles.footerContent}>
          <View style={styles.footerContentLeft}>
            <CgShapeHexagon style={styles.arrow} size={20} color="#fff" />
            <Text style={styles.footerText}>Configurar Pix</Text>
          </View>
          <View style={styles.footerContentRight}>
            <IoIosArrowForward style={styles.arrow} size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.lineFt} />
      </View>
    </View>
  );
}
