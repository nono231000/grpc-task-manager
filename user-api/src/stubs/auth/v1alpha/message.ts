// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "auth/v1alpha/message.proto" (package "auth.v1alpha", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message auth.v1alpha.LoginRequest
 */
export interface LoginRequest {
    /**
     * @generated from protobuf field: string email = 1;
     */
    email: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
    /**
     * @generated from protobuf field: string ip = 3;
     */
    ip: string;
}
/**
 * @generated from protobuf message auth.v1alpha.LoginResponse
 */
export interface LoginResponse {
    /**
     * @generated from protobuf field: string refresh_token = 1;
     */
    refreshToken: string;
    /**
     * @generated from protobuf field: string jwt = 2;
     */
    jwt: string;
    /**
     * @generated from protobuf field: auth.v1alpha.LoginResponse.STATUS status = 3;
     */
    status: LoginResponse_STATUS;
}
/**
 * @generated from protobuf enum auth.v1alpha.LoginResponse.STATUS
 */
export enum LoginResponse_STATUS {
    /**
     * @generated from protobuf enum value: OK = 0;
     */
    OK = 0,
    /**
     * @generated from protobuf enum value: WRONG_PASSWORD = 1;
     */
    WRONG_PASSWORD = 1,
    /**
     * @generated from protobuf enum value: NOT_FOUND = 2;
     */
    NOT_FOUND = 2,
    /**
     * @generated from protobuf enum value: INTERNAL = 3;
     */
    INTERNAL = 3
}
/**
 * @generated from protobuf message auth.v1alpha.RefreshTokenRequest
 */
export interface RefreshTokenRequest {
    /**
     * @generated from protobuf field: string refresh_token = 1;
     */
    refreshToken: string;
    /**
     * @generated from protobuf field: string ip = 2;
     */
    ip: string;
}
/**
 * @generated from protobuf message auth.v1alpha.RefreshTokenResponse
 */
export interface RefreshTokenResponse {
    /**
     * @generated from protobuf field: string refresh_token = 1;
     */
    refreshToken: string;
    /**
     * @generated from protobuf field: string jwt = 2;
     */
    jwt: string;
}
/**
 * @generated from protobuf message auth.v1alpha.ValidateRequest
 */
export interface ValidateRequest {
    /**
     * @generated from protobuf field: string jwt = 1;
     */
    jwt: string; // Add role here
}
/**
 * @generated from protobuf message auth.v1alpha.ValidateResponse
 */
export interface ValidateResponse {
    /**
     * @generated from protobuf field: bool ok = 1;
     */
    ok: boolean; // Add role here
}
// @generated message type with reflection information, may provide speed optimized methods
class LoginRequest$Type extends MessageType<LoginRequest> {
    constructor() {
        super("auth.v1alpha.LoginRequest", [
            { no: 1, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<LoginRequest>): LoginRequest {
        const message = { email: "", password: "", ip: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LoginRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginRequest): LoginRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string email */ 1:
                    message.email = reader.string();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                case /* string ip */ 3:
                    message.ip = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string email = 1; */
        if (message.email !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.email);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.password);
        /* string ip = 3; */
        if (message.ip !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.ip);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.v1alpha.LoginRequest
 */
export const LoginRequest = new LoginRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginResponse$Type extends MessageType<LoginResponse> {
    constructor() {
        super("auth.v1alpha.LoginResponse", [
            { no: 1, name: "refresh_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "jwt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "status", kind: "enum", T: () => ["auth.v1alpha.LoginResponse.STATUS", LoginResponse_STATUS] }
        ]);
    }
    create(value?: PartialMessage<LoginResponse>): LoginResponse {
        const message = { refreshToken: "", jwt: "", status: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LoginResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginResponse): LoginResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string refresh_token */ 1:
                    message.refreshToken = reader.string();
                    break;
                case /* string jwt */ 2:
                    message.jwt = reader.string();
                    break;
                case /* auth.v1alpha.LoginResponse.STATUS status */ 3:
                    message.status = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string refresh_token = 1; */
        if (message.refreshToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.refreshToken);
        /* string jwt = 2; */
        if (message.jwt !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.jwt);
        /* auth.v1alpha.LoginResponse.STATUS status = 3; */
        if (message.status !== 0)
            writer.tag(3, WireType.Varint).int32(message.status);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.v1alpha.LoginResponse
 */
export const LoginResponse = new LoginResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshTokenRequest$Type extends MessageType<RefreshTokenRequest> {
    constructor() {
        super("auth.v1alpha.RefreshTokenRequest", [
            { no: 1, name: "refresh_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RefreshTokenRequest>): RefreshTokenRequest {
        const message = { refreshToken: "", ip: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RefreshTokenRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefreshTokenRequest): RefreshTokenRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string refresh_token */ 1:
                    message.refreshToken = reader.string();
                    break;
                case /* string ip */ 2:
                    message.ip = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RefreshTokenRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string refresh_token = 1; */
        if (message.refreshToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.refreshToken);
        /* string ip = 2; */
        if (message.ip !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.ip);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.v1alpha.RefreshTokenRequest
 */
export const RefreshTokenRequest = new RefreshTokenRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshTokenResponse$Type extends MessageType<RefreshTokenResponse> {
    constructor() {
        super("auth.v1alpha.RefreshTokenResponse", [
            { no: 1, name: "refresh_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "jwt", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RefreshTokenResponse>): RefreshTokenResponse {
        const message = { refreshToken: "", jwt: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RefreshTokenResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefreshTokenResponse): RefreshTokenResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string refresh_token */ 1:
                    message.refreshToken = reader.string();
                    break;
                case /* string jwt */ 2:
                    message.jwt = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RefreshTokenResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string refresh_token = 1; */
        if (message.refreshToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.refreshToken);
        /* string jwt = 2; */
        if (message.jwt !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.jwt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.v1alpha.RefreshTokenResponse
 */
export const RefreshTokenResponse = new RefreshTokenResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ValidateRequest$Type extends MessageType<ValidateRequest> {
    constructor() {
        super("auth.v1alpha.ValidateRequest", [
            { no: 1, name: "jwt", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ValidateRequest>): ValidateRequest {
        const message = { jwt: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ValidateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidateRequest): ValidateRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string jwt */ 1:
                    message.jwt = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ValidateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string jwt = 1; */
        if (message.jwt !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.jwt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.v1alpha.ValidateRequest
 */
export const ValidateRequest = new ValidateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ValidateResponse$Type extends MessageType<ValidateResponse> {
    constructor() {
        super("auth.v1alpha.ValidateResponse", [
            { no: 1, name: "ok", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ValidateResponse>): ValidateResponse {
        const message = { ok: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ValidateResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidateResponse): ValidateResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ValidateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool ok = 1; */
        if (message.ok !== false)
            writer.tag(1, WireType.Varint).bool(message.ok);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.v1alpha.ValidateResponse
 */
export const ValidateResponse = new ValidateResponse$Type();
