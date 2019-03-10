var dominant = [
    'none',
    document.getElementById('Abia'),
    document.getElementById('Adamawa'),
    document.getElementById('Akwa_Ibom'),
    document.getElementById('Anambra'),
    document.getElementById('Bauchi'),
    document.getElementById('Bayelsa'),
    document.getElementById('Benue'),
    document.getElementById('Borno'),
    document.getElementById('Cross_River'),
    document.getElementById('Delta'),
    document.getElementById('Ebonyi'),
    document.getElementById('Edo'),
    document.getElementById('Ekiti'),
    document.getElementById('Enugu'),
    document.getElementById('Gombe'),
    document.getElementById('Imo'),
    document.getElementById('Jigawa'),
    document.getElementById('Kaduna'),
    document.getElementById('Kano'),
    document.getElementById('Kastina'),
    document.getElementById('Kebbi'),
    document.getElementById('Kogi'),
    document.getElementById('Kwara'),
    document.getElementById('Lagos'),
    document.getElementById('Nasarawa'),
    document.getElementById('Niger'),
    document.getElementById('Ogun'),
    document.getElementById('Ondo'),
    document.getElementById('Osun'),
    document.getElementById('Oyo'),
    document.getElementById('Plateau'),
    document.getElementById('Rivers'),
    document.getElementById('Sokoto'),
    document.getElementById('Taraba'),
    document.getElementById('Yobe'),
    document.getElementById('Zamfara'),
    document.getElementById('F_C_T')
];
var titles = [
    'none',
    document.getElementById('tooltip_1'),
    document.getElementById('tooltip_2'),
    document.getElementById('tooltip_3'),
    document.getElementById('tooltip_4'),
    document.getElementById('tooltip_5'),
    document.getElementById('tooltip_6'),
    document.getElementById('tooltip_7'),
    document.getElementById('tooltip_8'),
    document.getElementById('tooltip_9'),
    document.getElementById('tooltip_10'),
    document.getElementById('tooltip_11'),
    document.getElementById('tooltip_12'),
    document.getElementById('tooltip_13'),
    document.getElementById('tooltip_14'),
    document.getElementById('tooltip_15'),
    document.getElementById('tooltip_16'),
    document.getElementById('tooltip_17'),
    document.getElementById('tooltip_18'),
    document.getElementById('tooltip_19'),
    document.getElementById('tooltip_20'),
    document.getElementById('tooltip_21'),
    document.getElementById('tooltip_22'),
    document.getElementById('tooltip_23'),
    document.getElementById('tooltip_24'), 
    document.getElementById('tooltip_25'),
    document.getElementById('tooltip_26'),
    document.getElementById('tooltip_27'),
    document.getElementById('tooltip_28'),
    document.getElementById('tooltip_29'),
    document.getElementById('tooltip_30'),
    document.getElementById('tooltip_31'),
    document.getElementById('tooltip_32'),
    document.getElementById('tooltip_33'),
    document.getElementById('tooltip_34'),
    document.getElementById('tooltip_35'),
    document.getElementById('tooltip_36'),
    document.getElementById('tooltip_37')
];

var state = ['none', 'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Kastina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'F.C.T'];


var apc = [ContestantName[0], ContestantParty[0], Abia[0], Adamawa[0], Akwa_Ibom[0], Anambra[0], Bauchi[0], Bayelsa[0], Benue[0], Borno[0], Cross_River[0], Delta[0], Ebonyi[0], Edo[0], Ekiti[0], Enugu[0], Gombe[0], Imo[0], Jigawa[0], Kaduna[0], Kano[0], Kastina[0], Kebbi[0], Kogi[0], Kwara[0], Lagos[0], Nasarawa[0], Niger[0], Ogun[0], Ondo[0], Osun[0], Oyo[0], Plateau[0], Rivers[0], Sokoto[0], Taraba[0], Yobe[0], Zamfara[0], F_C_T[0]];
var pdp = [ContestantName[1], ContestantParty[1], Abia[1], Adamawa[1], Akwa_Ibom[1], Anambra[1], Bauchi[1], Bayelsa[1], Benue[1], Borno[1], Cross_River[1], Delta[1], Ebonyi[1], Edo[1], Ekiti[1], Enugu[1], Gombe[1], Imo[1], Jigawa[1], Kaduna[1], Kano[1], Kastina[1], Kebbi[1], Kogi[1], Kwara[1], Lagos[1], Nasarawa[1], Niger[1], Ogun[1], Ondo[1], Osun[1], Oyo[1], Plateau[1], Rivers[1], Sokoto[1], Taraba[1], Yobe[1], Zamfara[1], F_C_T[1]];
var aac = [ContestantName[2], ContestantParty[2], Abia[2], Adamawa[2], Akwa_Ibom[2], Anambra[2], Bauchi[2], Bayelsa[2], Benue[2], Borno[2], Cross_River[2], Delta[2], Ebonyi[2], Edo[2], Ekiti[2], Enugu[2], Gombe[2], Imo[2], Jigawa[2], Kaduna[2], Kano[2], Kastina[2], Kebbi[2], Kogi[2], Kwara[2], Lagos[2], Nasarawa[2], Niger[2], Ogun[2], Ondo[2], Osun[2], Oyo[2], Plateau[2], Rivers[2], Sokoto[2], Taraba[2], Yobe[2], Zamfara[2], F_C_T[2]];
var ypp = [ContestantName[3], ContestantParty[3], Abia[3], Adamawa[3], Akwa_Ibom[3], Anambra[3], Bauchi[3], Bayelsa[3], Benue[3], Borno[3], Cross_River[3], Delta[3], Ebonyi[3], Edo[3], Ekiti[3], Enugu[3], Gombe[3], Imo[3], Jigawa[3], Kaduna[3], Kano[3], Kastina[3], Kebbi[3], Kogi[3], Kwara[3], Lagos[3], Nasarawa[3], Niger[3], Ogun[3], Ondo[3], Osun[3], Oyo[3], Plateau[3], Rivers[3], Sokoto[3], Taraba[3], Yobe[3], Zamfara[3], F_C_T[3]];
    
    
function updateData(id) {
    var vote = [
        'none',
        apc[id + 1],
        pdp[id + 1],
        aac[id + 1],
        ypp[id + 1]
    ];

    
    var contestants = [
        'none',
        apc[0] + ' - ' + apc[1],
        pdp[0] + ' - ' + pdp[1],
        aac[0] + ' - ' + aac[1],
        ypp[0] + ' - ' + ypp[1]
    ];

    var state_field = document.getElementById('whatState');

    state_field.innerHTML = state[id];


    return SortData(vote, contestants)
}

function partitionMap(count) {

    while(count != 39){
        if (Math.max(apc[count], pdp[count], aac[count], ypp[count]) == apc[count] && apc[count] != 0) {
            dominant[count - 1].classList = 'apc';
            count = count + 1
        }
        else if (Math.max(apc[count], pdp[count], aac[count], ypp[count]) == pdp[count] && pdp[count] != 0) {
            dominant[count - 1].classList = 'pdp';
            count = count + 1
        }
        else if (Math.max(apc[count], pdp[count], aac[count], ypp[count]) == aac[count] && aac[count] != 0) {
            dominant[count - 1].classList = 'pdp';
            count = count + 1
        }
        else if (Math.max(apc[count], pdp[count], aac[count], ypp[count]) == ypp[count] && ypp[count] != 0) {
            dominant[count - 1].classList = 'pdp';
            count = count + 1
        }
        else if (Math.max(apc[count], pdp[count], aac[count], ypp[count]) == 0) {
            dominant[count - 1].classList = 'neutral';
            count = count + 1
        }
        else{}
        
        document.getElementById('Borno_2').classList = dominant[8].classList;
    }

    return calcStack();
};

function calcStack() {
    var total_APC = apc[2] + apc[3] + apc[4] + apc[5] + apc[6] + apc[7] + apc[8] + apc[9] + apc[10] + apc[11] + apc[12] + apc[13] + apc[14] + apc[15] + apc[16] + apc[17] + apc[18] + apc[19] + apc[20] + apc[21] + apc[22] + apc[23] + apc[24] + apc[25] + apc[26] + apc[27] + apc[28] + apc[29] + apc[30] + apc[31] + apc[32] + apc[33] + apc[34] + apc[35] + apc[36] + apc[37] + apc[38]

    var total_PDP = pdp[2] + pdp[3] + pdp[4] + pdp[5] + pdp[6] + pdp[7] + pdp[8] + pdp[9] + pdp[10] + pdp[11] + pdp[12] + pdp[13] + pdp[14] + pdp[15] + pdp[16] + pdp[17] + pdp[18] + pdp[19] + pdp[20] + pdp[21] + pdp[22] + pdp[23] + pdp[24] + pdp[25] + pdp[26] + pdp[27] + pdp[28] + pdp[29] + pdp[30] + pdp[31] + pdp[32] + pdp[33] + pdp[34] + pdp[35] + pdp[36] + pdp[37] + pdp[38]

    var total_AAC = aac[2] + aac[3] + aac[4] + aac[5] + aac[6] + aac[7] + aac[8] + aac[9] + aac[10] + aac[11] + aac[12] + aac[13] + aac[14] + aac[15] + aac[16] + aac[17] + aac[18] + aac[19] + aac[20] + aac[21] + aac[22] + aac[23] + aac[24] + aac[25] + aac[26] + aac[27] + aac[28] + aac[29] + aac[30] + aac[31] + aac[32] + aac[33] + aac[34] + aac[35] + aac[36] + aac[37] + aac[38]

    var total_YPP = ypp[2] + ypp[3] + ypp[4] + ypp[5] + ypp[6] + ypp[7] + ypp[8] + ypp[9] + ypp[10] + ypp[11] + ypp[12] + ypp[13] + ypp[14] + ypp[15] + ypp[16] + ypp[17] + ypp[18] + ypp[19] + ypp[20] + ypp[21] + ypp[22] + ypp[23] + ypp[24] + ypp[25] + ypp[26] + ypp[27] + ypp[28] + ypp[29] + ypp[30] + ypp[31] + ypp[32] + ypp[33] + ypp[34] + ypp[35] + ypp[36] + ypp[37] + ypp[38]

    var  totalOfTotal = total_APC + total_PDP + total_AAC + total_YPP;

    var ratio = [
        total_APC/totalOfTotal*100,
        total_PDP/totalOfTotal*100,
        total_AAC/totalOfTotal*100,
        total_YPP/totalOfTotal*100
    ]

    var stacks = [
        document.getElementById('stack1'),
        document.getElementById('stack2'),
        document.getElementById('stack3'),
        document.getElementById('stack4'),
    ];

    stacks[0].style = 'width:' + ratio[0] + '%; transition: 5s;'
    stacks[1].style = 'width:' + ratio[1] + '%; transition: 5s;'
    stacks[2].style = 'width:' + ratio[2] + '%; transition: 5s;'
    stacks[3].style = 'width:' + ratio[3] + '%; transition: 5s;'
}