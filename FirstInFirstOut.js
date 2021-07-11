function FirstInFirstOut(prioritizer, Clients, ipaddresses, servingClients, servingipaddresses, BufferSize) {
    TimeSorter(Clients, ipaddresses);
    reloader(Clients, ipaddresses, servingClients, servingipaddresses, BufferSize);
}

function reloader(Clients, ipaddresses, servingClients, servingipaddresses, BufferSize) {
    for (let i = 0; i < BufferSize; i++) {
        servingClients[i] = Clients[i];
        servingipaddresses[i] = ipaddresses[i];
    }
    Clients.splice(0, BufferSize);
    ipaddresses.splice(0, BufferSize);
    return servingClients;
}

function TimeSorter(Clients, ipaddresses) {
    for (let i = 0; i < Clients.length; i++) {
        var index = i;
        var a = Clients[i];
        for (let j = i + 1; j < Clients.length; j++) {
            var earlier = TimeComparator(a, Clients[j]);
            if (earlier == 1) {
                index = j;
                a = Clients[j];
            } else {
                continue;
            }
        }
        var s1 = Clients[index];
        var ss1 = ipaddresses[index];
        var s2 = Clients[i];
        var ss2 = ipaddresses[i];
        ipaddresses[i] = ss1;
        Clients[i] = s1;
        ipaddresses[index] = ss2;
        Clients[index] = s2;
    }
}

function TimeComparator(a, b) {
    try {
        var a_date = a['date'];
        var b_date = b['date'];
        var amonth = a['month'];
        var bmonth = b['month'];
    } catch (e) {
        console.log('error occurred');
    } finally {
        if ((a_date == b_date) && (amonth == bmonth)) {
            if (a.calculator() < b.calculator()) {
                return 0;
            } else {
                return 1;
            }
        }
    }
}

export default FirstInFirstOut;
