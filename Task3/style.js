function generateTable()
        {
            var table = '';
            var number = parseInt(prompt('Enter Number to Generate Table of: '));
            for(let i = 1; i <= 10; i++) {
                const final = i * number;
                table += `${number} * ${("0" + i).slice(-2)} = ${("0" + final).slice(-2)}` + '\n';
            }
            document.getElementById('result').innerText = table;
        } 
        function calculatePower()
        {
            var power = '';
            var base = parseInt(prompt('Enter the Value of Base: '));
            var exponent = parseInt(prompt('Enter the Value of Exponent: '));
            let final = Math.pow(base, exponent);
            power += `${base} ^ ${(exponent)} = ${(final)}`;
            document.getElementById('final').innerText = power;
        }

        function generateSequence()
        {
            let sequence = '{ ';
            var limit = parseInt(prompt('Enter limit to Generate Sequence up to: '));
            for(let i = 0; i <= limit; i++) {
                if (i==limit){
                    sequence += `${(i)} `;
                }
                else{
                    sequence += `${(i)} , `;
                }
            }
            sequence += '}'
            document.getElementById('final').innerText = sequence;
        }
        function generateEvenOdd()
        {
            let sequence;
            let type = prompt('Enter "O" for Odd and "E" for Even Sequence Generation: ');
            if (type.toLowerCase() === 'o'){
                sequence = '{ '
                for(let i = 1; i <= 20; i += 2) {
                    if (i==20){
                        sequence += `${(i)} `;
                    }
                    else{
                        sequence += `${(i)} , `;
                    }
                }
                sequence += '}'
            }
            else if (type.toLowerCase() === 'e'){
                sequence = '{ '
                for(let i = 0; i <= 20; i += 2) {
                    if (i==20){
                        sequence += `${(i)} `;
                    }
                    else{
                        sequence += `${(i)} , `;
                    }
                }
                sequence += '}'
            }
            else{
                sequence = 'Invalid Input'
            }
            document.getElementById('final').innerText = sequence;
        }
        window.onload = document.getElementById('table').onclick = generateTable;
        window.onload = document.getElementById('power').onclick = calculatePower;
        window.onload = document.getElementById('sequence').onclick = generateSequence;
        window.onload = document.getElementById('evenOdd').onclick = generateEvenOdd;
