import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles2 } from './styles2';
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
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../App';

export default function Tela2() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles2.container}>
            <View style={styles2.content}>
                <View style={styles2.balance}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Tela1')}
                        style={styles2.iconTopLeft}
                    >
                        <IoMdClose size={20} color="#fff" />
                    </TouchableOpacity>
                    <FaRegQuestionCircle style={styles2.iconTopRight} size={20} color="#fff" />
                </View>
                <Text style={styles2.money}>Área Pix</Text>
                <View style={styles2.descriptionView}>
                    <Text style={styles2.description}>Envie e receba pagamentos a qualquer</Text>
                    <Text style={styles2.description}>hora e dia da semana, sem pagar nada</Text>
                    <Text style={styles2.description}>por isso</Text>
                </View>
                <View style={styles2.ferramentasPix}>
                    <View style={styles2.iconViewTotal}>
                        <View style={styles2.iconView}>
                            <FaMoneyBill size={28} color="#fff" />
                        </View>
                        <Text style={styles2.descriptionIcon}>Transferir</Text>
                    </View>
                    <View style={styles2.iconViewTotal}>
                        <View style={styles2.iconView}>
                            <FaRegCalendar size={28} color="#fff" />
                        </View>
                        <Text style={styles2.descriptionIcon}>Programar</Text>
                    </View>
                    <View style={styles2.iconViewTotal}>
                        <View style={styles2.iconView}>
                            <FaQrcode size={28} color="#fff" />
                        </View>
                        <Text style={styles2.descriptionIcon}>Ler QR code</Text>
                    </View>
                </View>
                <View style={styles2.ferramentasPix}>
                    <View style={styles2.iconViewTotal}>
                        <View style={styles2.iconView}>
                            <IoCopy size={28} color="#fff" />
                        </View>
                        <Text style={styles2.descriptionIcon}>Pix Copia e Cola</Text>
                    </View>
                    <View style={styles2.iconViewTotal}>
                        <View style={styles2.iconView}>
                            <RiMoneyDollarBoxLine size={28} color="#fff" />
                        </View>
                        <Text style={styles2.descriptionIcon}>Cobrar</Text>
                    </View>
                    <View style={styles2.iconViewTotal}>
                        <View style={styles2.iconView}>
                            <FaMoneyBill size={28} color="#fff" />
                        </View>
                        <Text style={styles2.descriptionIcon}>Depositar</Text>
                    </View>
                </View>
            </View>
            <View style={styles2.line} />
            <View style={styles2.footer}>
                <Text style={styles2.footerTextTop}>Preferencias</Text>
                <View style={styles2.footerContent}>
                    <View style={styles2.footerContentLeft}>
                        <MdOutlineShield style={styles2.arrow} size={20} color="#fff" />
                        <Text style={styles2.footerText}>Registrar ou trazer chaves</Text>
                    </View>
                    <View style={styles2.footerContentRight}>
                        <IoIosArrowForward style={styles2.arrow} size={20} color="#fff" />
                    </View>
                </View>
                <View style={styles2.lineFt} />
                <View style={styles2.footerContent}>
                    <View style={styles2.footerContentLeft}>
                        <CgShapeHexagon style={styles2.arrow} size={20} color="#fff" />
                        <Text style={styles2.footerText}>Configurar Pix</Text>
                    </View>
                    <View style={styles2.footerContentRight}>
                        <IoIosArrowForward style={styles2.arrow} size={20} color="#fff" />
                    </View>
                </View>
                <View style={styles2.lineFt} />
            </View>
        </View>
    );
}
