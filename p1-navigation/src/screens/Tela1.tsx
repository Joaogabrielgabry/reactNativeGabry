import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FaPix } from 'react-icons/fa6';
import { FaBarcode } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { styles1 } from './styles1';
import { NavigationProps } from '../../App';
import Perfil from '../assets/perfil.png';
import cartao from '../assets/cartaochegou.png';

export default function Tela1() {
    const navigation = useNavigation<NavigationProps>();
    const [accountBalance, setAccountBalance] = useState("0,00");

    const handleInputChange = (text: string) => {
        let formattedText = text.replace(/[^0-9,]/g, '');
        const parts = formattedText.split(',');
        if (parts.length > 2) {
            formattedText = parts[0] + ',' + parts[1].slice(0, 2);
        }
        const [inteiro, decimal] = formattedText.split(',');
        const inteiroFormatado = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const saldoFormatado = decimal ? `${inteiroFormatado},${decimal.slice(0, 2)}` : `${inteiroFormatado},00`;
        setAccountBalance(saldoFormatado);
    };

    return (
        <View style={styles1.container}>
            <View style={styles1.header}>
                <View style={styles1.headerContent}>
                    <View style={styles1.headerContentTop}>
                        <View style={styles1.headerImage}>
                            <Image source={Perfil} style={styles1.perfil} />
                        </View>
                        <View style={styles1.headerRight}>
                            <IoEyeOutline style={styles1.iconTopRight} size={20} color="#fff" />
                            <FaRegQuestionCircle style={styles1.iconTopRight} size={20} color="#fff" />
                            <LuShieldCheck style={styles1.iconTopRight} size={20} color="#fff" />
                        </View>
                    </View>
                    <View style={styles1.headerText}>
                        <Text style={styles1.greeting}>Olá,</Text>
                        <Text style={styles1.username}> João</Text>
                    </View>
                </View>
            </View>

            <View style={styles1.content}>
                <View style={styles1.balance}>
                    <Text style={styles1.title}>Conta</Text>
                    <IoIosArrowForward style={styles1.arrow} size={20} color="#fff" />
                </View>
                <View style={styles1.balanceInputContainer}>
                    <Text style={styles1.currencySymbol}>R$</Text>
                    <TextInput
                        style={styles1.moneyInput}
                        value={accountBalance}
                        onChangeText={handleInputChange}
                        keyboardType="numeric"
                        placeholderTextColor="#ffffff"
                    />
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles1.pix}>
                    <View style={styles1.totalicons}>
                    <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles1.iconButton}
                            onPress={() => navigation.navigate('Tela2')}
                        >
                            <FaPix size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles1.totalicontext}>Área Pix</Text>
                    </View>

                    <View style={styles1.totalicons}>
                        <TouchableOpacity activeOpacity={0.7} style={styles1.iconButton}>
                            <FaBarcode size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles1.totalicontext}>Pagar</Text>
                    </View>

                    <View style={styles1.totalicons}>
                        <TouchableOpacity activeOpacity={0.7} style={styles1.iconButton}>
                            <FaHandHoldingUsd size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles1.totalicontext}>Pegar</Text>
                        <Text style={styles1.totalicontext}>emprestado</Text>
                    </View>

                    <View style={styles1.totalicons}>
                        <TouchableOpacity activeOpacity={0.7} style={styles1.iconButton}>
                            <FaMoneyBill size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles1.totalicontext}>Transferir</Text>
                    </View>
                    <View style={styles1.totalicons}>
                        <TouchableOpacity activeOpacity={0.7} style={styles1.iconButton}>
                            <MdOutlinePhoneIphone size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles1.totalicontext}>Transferir</Text>
                    </View>
                    <View style={styles1.totalicons}>
                        <TouchableOpacity activeOpacity={0.7} style={styles1.iconButton}>
                            <FaMoneyBill size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles1.totalicontext}>Depositar</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles1.contentbody}>
                <TouchableOpacity activeOpacity={0.7} style={styles1.buttonSkillBody}>
                    <CiCreditCard1 style={styles1.arrow} size={24} color="#fff" />
                    <Text style={styles1.buttonSkillBodyText}>Meus cartões</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles1.buttonSkillBody2}>
                    <View style={styles1.buttonSkillBodytext2}>
                        <Text style={styles1.buttonSkillBodyText}>Traga seus dados e aumente suas</Text>
                        <Text style={styles1.buttonSkillBodyText}>chances de crédito</Text>
                    </View>
                    <View style={styles1.buttonSkillBodyIcon}>
                        <MdOutlinePhoneIphone size={24} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles1.line} />

            <View style={styles1.contentcardiscomes}>
                <View style={styles1.cartao}>
                    <Image source={cartao} style={styles1.cartao} />
                </View>
                <View style={styles1.contentcardiscomesText}>
                    <View style={styles1.contentcardiscomesTextLeft}>
                        <Text style={styles1.contentcardiscomesText}>Seu cartão chegou</Text>
                        <Text style={styles1.contentcardiscomesTextmedium}>Entregue em: 13 Mar</Text>
                        <Text style={styles1.contentcardiscomesTextshort}>Rua Antonio Malheiros, 811</Text>
                    </View>
                    <View style={styles1.contentcardiscomesTextRight}>
                        <IoIosArrowForward style={styles1.contentcardiscomesTextRight} size={20} color="#fff" />
                    </View>
                </View>
                <View style={styles1.activeCard}>
                    <TouchableOpacity activeOpacity={0.7} style={styles1.activeCardLeft}>
                        <Text style={styles1.activeCardLeftText}>Ativar cartão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles1.activeCardRight}>
                        <Text style={styles1.activeCardRightText}>Não recebi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}