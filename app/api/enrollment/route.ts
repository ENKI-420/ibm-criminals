import { NextRequest, NextResponse } from "next/server";

interface EnrollmentRequest {
  deviceId: string;
  deviceName: string;
  deviceType: "laptop" | "mobile" | "station" | "iqpod";
  connectionMethod: "bluetooth" | "usb" | "wifi" | "ethernet";
  capabilities?: string[];
}

interface EnrolledNode {
  nodeId: string;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  meshRole: string;
  connectionMethod: string;
  frotBinding: string;
  density: number;
  status: string;
  enrolledAt: string;
  permissions: string[];
  firmwareTarget: string;
}

function computeMeshRole(type: string): string {
  switch (type) {
    case "laptop": return "GENESIS_NODE";
    case "mobile": return "SATELLITE_NODE";
    case "station": return "COMPUTE_NODE";
    case "iqpod": return "QUANTUM_POD";
    default: return "PERIPHERAL";
  }
}

function generateFrotBinding(deviceId: string): string {
  // Simulated FRoT (Firmware Root of Trust) hardware soul binding
  const hash = Array.from(deviceId).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `FRoT-${hash.toString(16).padStart(8, "0")}-${Date.now().toString(36)}`;
}

export async function GET() {
  return NextResponse.json({
    service: "z3braMesh Enrollment Protocol",
    version: "v2.1-z3bra",
    description: "Enroll devices into the z3braMesh quantum network topology",
    protocol: {
      steps: [
        "1. Device Discovery (Bluetooth/USB/WiFi/Ethernet)",
        "2. FRoT Hardware Soul Binding",
        "3. Mesh Role Assignment",
        "4. Density Calibration",
        "5. OSIRIS Bridge Configuration",
        "6. Firmware Target Assignment",
        "7. Agent Deployment Authorization",
        "8. Enrollment Confirmation",
      ],
      supportedConnections: ["bluetooth", "usb", "wifi", "ethernet"],
      deviceTypes: ["laptop", "mobile", "station", "iqpod"],
    },
    currentMesh: {
      totalNodes: 3,
      activeNodes: 2,
      meshProtocol: "Z3bra_v2.1",
      convergence: "STABLE",
    },
    permissions: {
      bluetooth: ["DEVICE_SCAN", "PAIR", "DATA_TRANSFER", "MESH_RELAY"],
      usb: ["MASS_STORAGE", "FIRMWARE_FLASH", "SERIAL_BRIDGE", "ISO_MOUNT"],
      wifi: ["MESH_NETWORK", "P2P_DIRECT", "SWARM_BROADCAST"],
      ethernet: ["HIGH_BANDWIDTH", "LOW_LATENCY", "BACKBONE_LINK"],
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as EnrollmentRequest;
    const { deviceId, deviceName, deviceType, connectionMethod, capabilities = [] } = body;

    if (!deviceId || !deviceName || !deviceType || !connectionMethod) {
      return NextResponse.json({
        error: "deviceId, deviceName, deviceType, and connectionMethod are required",
      }, { status: 400 });
    }

    const validTypes = ["laptop", "mobile", "station", "iqpod"];
    if (!validTypes.includes(deviceType)) {
      return NextResponse.json({ error: `deviceType must be one of: ${validTypes.join(", ")}` }, { status: 400 });
    }

    const validConnections = ["bluetooth", "usb", "wifi", "ethernet"];
    if (!validConnections.includes(connectionMethod)) {
      return NextResponse.json({ error: `connectionMethod must be one of: ${validConnections.join(", ")}` }, { status: 400 });
    }

    const permissionsMap: Record<string, string[]> = {
      bluetooth: ["DEVICE_SCAN", "PAIR", "DATA_TRANSFER", "MESH_RELAY"],
      usb: ["MASS_STORAGE", "FIRMWARE_FLASH", "SERIAL_BRIDGE", "ISO_MOUNT"],
      wifi: ["MESH_NETWORK", "P2P_DIRECT", "SWARM_BROADCAST"],
      ethernet: ["HIGH_BANDWIDTH", "LOW_LATENCY", "BACKBONE_LINK"],
    };

    const node: EnrolledNode = {
      nodeId: `z3bra-${deviceType.slice(0, 3)}-${Math.random().toString(36).slice(2, 8)}`,
      deviceId,
      deviceName,
      deviceType,
      meshRole: computeMeshRole(deviceType),
      connectionMethod,
      frotBinding: generateFrotBinding(deviceId),
      density: parseFloat((0.95 + Math.random() * 0.05).toFixed(4)),
      status: "ENROLLING",
      enrolledAt: new Date().toISOString(),
      permissions: [...permissionsMap[connectionMethod], ...capabilities],
      firmwareTarget: `Zebra0S-${computeMeshRole(deviceType).replace("_", "-")}-v2.1`,
    };

    return NextResponse.json({
      message: "Device enrolled in z3braMesh",
      node,
      nextSteps: [
        "FRoT binding will complete in ~30 seconds",
        "Run firmware flash via OSIRIS Bridge Cockpit",
        "Device will appear in Mesh Topology once online",
      ],
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
