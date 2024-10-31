let devices = [
    "ORACLE_US_VA_Ashburn_F3_SW",
    "ORACLE_US_VA_Ashburn_F2_SW",
    "ORACLE_US_VA_Ashburn_F1_SW",
    "ORACLE_US_VA_Ashburn_F0_SW_Multilayer",
    "ORACLE_US_VA_Ashburn_F0_SW",
    "ORACLE_US_VA_Ashburn_F0_ROUTER",
    
    "ORACLE_EU_ES_Madrid_F3_SW",
    "ORACLE_EU_ES_Madrid_F2_SW",
    "ORACLE_EU_ES_Madrid_F1_SW",
    "ORACLE_EU_ES_Madrid_F0_SW_Multilayer",
    "ORACLE_EU_ES_Madrid_F0_SW",
    "ORACLE_EU_ES_Madrid_F0_ROUTER",
    
    "ORACLE_EU_DE_Frankfurt_F3_SW",
    "ORACLE_EU_DE_Frankfurt_F2_SW",
    "ORACLE_EU_DE_Frankfurt_F1_SW",
    "ORACLE_EU_DE_Frankfurt_F0_SW_Multilayer",
    "ORACLE_EU_DE_Frankfurt_F0_ROUTER",
    "ORACLE_EU_DE_Frankfurt_F0_SW",
    
    "ORACLE_AS_JP_Tokyo_F3_SW",
    "ORACLE_AS_JP_Tokyo_F2_SW",
    "ORACLE_AS_JP_Tokyo_F1_SW",
    "ORACLE_AS_JP_Tokyo_F0_SW_Multilayer",
    "ORACLE_AS_JP_Tokyo_F0_ROUTER",
    "ORACLE_AS_JP_Tokyo_F0_SW",
    
    "ORACLE_AS_IN_Mumbai_F0_ROUTER2",
    "ORACLE_AS_IN_Mumbai_F0_ROUTER1",
    "ORACLE_AS_IN_Mumbai_F0_SW_Multilayer_Core1",
    "ORACLE_AS_IN_Mumbai_F0_SW_Multilayer_Core2",
    "ORACLE_AS_IN_Mumbai_F0_SW_Multilayer_Distribution1",
    "ORACLE_AS_IN_Mumbai_F0_SW_Multilayer_Distribution2",
    "ORACLE_AS_IN_Mumbai_F3_SW_Access",
    "ORACLE_AS_IN_Mumbai_F2_SW_Access",
    "ORACLE_AS_IN_Mumbai_F1_SW_Access",
    "ORACLE_AS_IN_Mumbai_F0_SW_Access",
    
    "ORACLE_AU_AU_Sydney_F0_ROUTER2",
    "ORACLE_AU_AU_Sydney_F0_ROUTER1",
    "ORACLE_AU_AU_Sydney_F0_SW_Multilayer_Core1",
    "ORACLE_AU_AU_Sydney_F0_SW_Multilayer_Core2",
    "ORACLE_AU_AU_Sydney_F0_SW_Multilayer_Distribution1",
    "ORACLE_AU_AU_Sydney_F0_SW_Multilayer_Distribution2",
    "ORACLE_AU_AU_Sydney_F3_SW_Access",
    "ORACLE_AU_AU_Sydney_F2_SW_Access",
    "ORACLE_AU_AU_Sydney_F1_SW_Access",
    "ORACLE_AU_AU_Sydney_F0_SW_Access"
];

for (let deviceName of devices) {
    configureIosDevice(deviceName, "do wr");
}
