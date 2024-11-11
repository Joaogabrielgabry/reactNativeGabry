import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput  } from 'react-native';
import { styles } from './styles';
import perfil from './assets/perfil.png';
import { FaPix } from "react-icons/fa6";
import { FaBarcode } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import cartao from './assets/cartaochegou.png'

export default function App() {
  const [accountBalance, setAccountBalance] = useState("0,00");
  const handleInputChange = (text) => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerContentTop}>
            <View style={styles.headerImage}>
              <Image source={perfil} style={styles.perfil} />
            </View>
            <View style={styles.headerRight}>
              <IoEyeOutline style={styles.iconTopRight} size={20} color="#fff" />
              <FaRegQuestionCircle style={styles.iconTopRight} size={20} color="#fff" />
              <LuShieldCheck style={styles.iconTopRight} size={20} color="#fff" />
            </View>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.username}> João</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.balance}>
          <Text style={styles.title}>Conta</Text>
          <IoIosArrowForward style={styles.arrow} size={20} color="#fff" />
        </View>
        <View style={styles.balanceInputContainer}>
        <Text style={styles.currencySymbol}>R$</Text>
        <TextInput
          style={styles.moneyInput}
          value={accountBalance}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          placeholderTextColor="#ffffff"
        />
      </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pix}>
          <View style={styles.totalicons}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <FaPix size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.totalicontext}>Área Pix</Text>
          </View>

          <View style={styles.totalicons}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <FaBarcode size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.totalicontext}>Pagar</Text>
          </View>

          <View style={styles.totalicons}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <FaHandHoldingUsd size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.totalicontext}>Pegar</Text>
            <Text style={styles.totalicontext}>emprestado</Text>
          </View>

          <View style={styles.totalicons}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <FaMoneyBill size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.totalicontext}>Transferir</Text>
          </View>
          <View style={styles.totalicons}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <MdOutlinePhoneIphone size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.totalicontext}>Transferir</Text>
          </View>
          <View style={styles.totalicons}>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
              <FaMoneyBill size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.totalicontext}>Depositar</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.contentbody}>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkillBody}>
          <CiCreditCard1 style={styles.arrow} size={24} color="#fff" />
          <Text style={styles.buttonSkillBodyText}>Meus cartões</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkillBody2}>
          <View style={styles.buttonSkillBodytext2}>
            <Text style={styles.buttonSkillBodyText}>Traga seus dados e aumente suas</Text>
            <Text style={styles.buttonSkillBodyText}>chances de crédito</Text>
          </View>
          <View style={styles.buttonSkillBodyIcon}>
            <MdOutlinePhoneIphone size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <View style={styles.contentcardiscomes}>
        <View style={styles.cartao}>
          <Image source={cartao} style={styles.cartao} />
        </View>
        <View style={styles.contentcardiscomesText}>
          <View style={styles.contentcardiscomesTextLeft}>
            <Text style={styles.contentcardiscomesText}>Seu cartão chegou</Text>
            <Text style={styles.contentcardiscomesTextmedium}>Entregue em: 13 Mar</Text>
            <Text style={styles.contentcardiscomesTextshort}>Rua Antonio Malheiros, 811</Text>
          </View>
          <View style={styles.contentcardiscomesTextRight}>
            <IoIosArrowForward style={styles.contentcardiscomesTextRight} size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.activeCard}>
          <TouchableOpacity activeOpacity={0.7} style={styles.activeCardLeft}>
            <Text style={styles.activeCardLeftText}>Ativar cartão</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.activeCardRight}>
            <Text style={styles.activeCardRightText}>Não recebi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
